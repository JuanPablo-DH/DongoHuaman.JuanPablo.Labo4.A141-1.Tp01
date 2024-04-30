import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { UsuarioService } from '../../services/usuario.service';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private databaseService: DatabaseService
  ) {
    this.databaseService.setBd('usuarios');
  }

  registrar() {
    let usuario: Usuario;

    try {
      usuario = UsuarioController.crearParaRegistrar(
        this.nombre,
        this.email,
        this.clave
      );
    } catch (error) {
      this.alertRegistroError(error);
      return;
    }

    this.authService
      .registrar(usuario)
      .then((respuesta) => {
        this.alertRegistroExito().then((x) => {
          this.databaseService.insertarConId(usuario.email, {
            nombre: usuario.nombre,
          });
          this.usuarioService.setUsuario(usuario);
          this.router.navigateByUrl('/home/info-usuario');
        });
      })
      .catch((error) => {
        this.alertRegistroError('Ya existe el email ' + usuario.email);
      });
  }

  async alertRegistroExito() {
    return Swal.fire({
      heightAuto: false,
      title: 'Crear Cuenta',
      text: 'Realizado exitosamente',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#808080',
    });
  }
  async alertRegistroError(pMensaje: any) {
    return Swal.fire({
      heightAuto: false,
      title: 'Error al crear Cuenta',
      text: pMensaje,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#808080',
    });
  }
}
