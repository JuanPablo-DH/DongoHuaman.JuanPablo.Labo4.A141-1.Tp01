import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Swalert } from '../../classes/swalert.class';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email: string = '';
  public clave: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  iniciarSesion() {
    let usuario: Usuario;

    try {
      usuario = UsuarioController.crearParaIniciarSesion(
        this.email,
        this.clave
      );
    } catch (error) {
      Swalert.alertAccesoError(error as string);
      return;
    }

    this.usuarioService
      .iniciarSesion(usuario)
      .then((r) => {
        Swalert.alertAccesoExito('Inicio de sesion exitoso');
        setTimeout(() => {
          this.router.navigateByUrl('/home/info-usuario');
        }, 250);
      })
      .catch((e) => {
        Swalert.alertAccesoError('No existe el usuario');
      });
  }

  cargarUsuario(indice: number) {
    this.email = this.usuarioService.usuariosValidos[indice - 1].email;
    this.clave = this.usuarioService.usuariosValidos[indice - 1].clave;
  }
}
