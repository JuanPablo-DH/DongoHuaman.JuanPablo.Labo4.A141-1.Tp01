import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public usuariosValidos = [
    new Usuario('', 'juanpablo@gmail.com', '123abc1'),
    new Usuario('', 'alan@hotmail.com', '123abc2'),
    new Usuario('', 'kevin@outlook.com', '123abc3'),
  ];
  private bd = 'usuarios';
  private key = 'usuario';

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService
  ) {}

  iniciarSesion(usuario: Usuario) {
    localStorage.setItem(this.key, JSON.stringify({ email: usuario.email }));
    return this.authService.iniciarSesion(usuario);
  }

  registrar(usuario: Usuario) {
    localStorage.setItem(this.key, JSON.stringify({ email: usuario.email }));
    return this.authService.registrar(usuario);
  }

  cerrarSesion() {
    localStorage.removeItem(this.key);
    return this.authService.cerrarSesion();
  }

  getEmail() {
    const usuarioString = localStorage.getItem(this.key);
    return usuarioString
      ? (JSON.parse(usuarioString) as Usuario).email
      : new Usuario().email;
  }

  insertar(usuario: Usuario) {
    return this.databaseService.insertarConId(
      usuario.email,
      { email: usuario.email, nombre: usuario.nombre },
      this.bd
    );
  }

  traerTodos() {
    return this.databaseService.traerTodos(this.bd);
  }

  traerPorId(id: string) {
    return this.databaseService.traerPorId(id, this.bd);
  }
}
