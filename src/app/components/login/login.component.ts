import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  iniciarSesion() {
    let usuario: Usuario;

    try {
      usuario = UsuarioController.crearParaIniciarSesion(
        this.email,
        this.clave
      );
    } catch (error) {
      this.alertLogeoError(error);
      return;
    }

    this.authService
      .iniciarSesion(usuario)
      .then((respuesta) => {
        this.usuarioService.setUsuario(usuario);
        this.router.navigateByUrl('/home/info-usuario');
      })
      .catch((error) => {
        this.alertLogeoError('No existe el usuario');
      });
  }

  cargarUsuario(numero: number) {
    switch (numero) {
      case 1:
        this.email = 'juanpablo@gmail.com';
        this.clave = '123abc1';
        break;
      case 2:
        this.email = 'alan@hotmail.com';
        this.clave = '123abc2';
        break;
      case 3:
        this.email = 'kevin@outlook.com';
        this.clave = '123abc3';
        break;
    }
  }

  async alertLogeoError(pMensaje: any) {
    return Swal.fire({
      heightAuto: false,
      title: 'Error al iniciar de sesion',
      text: pMensaje,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#808080',
    });
  }
}
