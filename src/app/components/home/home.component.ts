import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  emailUsuario: string = '¿¿¿¿????';

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {
    this.emailUsuario = this.usuarioService.getUsuario().email;
  }

  ngOnInit(): void {
    //console.log('email usuario', this.usuarioService);
    //this.emailUsuario = this.usuarioService.getEmail();
  }

  cerrarSesion() {
    this.authService
      .cerrarSesion()
      .then(() => {
        this.usuarioService.clearUsuario();
        this.router.navigateByUrl('/iniciar-sesion');
      })
      .catch((e) => console.log(e));
  }
}
