import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  public email: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.email = this.usuarioService.getEmail();
  }

  ngOnInit(): void {}

  cerrarSesion() {
    this.usuarioService
      .cerrarSesion()
      .then((r) => {
        this.router.navigateByUrl('/iniciar-sesion');
      })
      .catch((e) => console.log(e));
  }
}
