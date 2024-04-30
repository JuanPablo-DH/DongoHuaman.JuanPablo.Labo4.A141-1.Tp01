import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private key = 'usuario';

  constructor() {}

  setUsuario(usuario: Usuario) {
    localStorage.setItem(this.key, JSON.stringify({ email: usuario.email }));
  }

  getUsuario(): Usuario {
    const usuarioString = localStorage.getItem(this.key);
    return usuarioString
      ? (JSON.parse(usuarioString) as Usuario)
      : new Usuario();
  }

  clearUsuario() {
    localStorage.removeItem(this.key);
  }
}
