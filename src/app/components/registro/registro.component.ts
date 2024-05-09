import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { UsuarioService } from '../../services/usuario.service';
import { Swalert } from '../../classes/swalert.class';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  public nombre: string = '';
  public email: string = '';
  public clave: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  registrar() {
    let usuario: Usuario;

    try {
      usuario = UsuarioController.crearParaRegistrar(
        this.nombre,
        this.email,
        this.clave
      );
    } catch (error) {
      Swalert.alertAccesoError(error as string);
      return;
    }

    this.usuarioService
      .registrar(usuario)
      .then((r) => {
        this.usuarioService.insertar(usuario);
        Swalert.alertAccesoExito('Registro exitoso');
        setTimeout(() => {
          this.router.navigateByUrl('/home/info-usuario');
        }, 250);
      })
      .catch((e) => {
        Swalert.alertAccesoError('Ya existe el email ' + usuario.email);
      });
  }
}
