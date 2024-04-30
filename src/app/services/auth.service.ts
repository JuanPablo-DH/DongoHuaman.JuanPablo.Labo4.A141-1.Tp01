import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private estaLogeado: boolean = false;

  constructor(private auth: Auth) {
    this.initAuthStateListener();
  }

  private initAuthStateListener() {
    onAuthStateChanged(this.auth, (usuario) => {
      if (usuario) {
        this.estaLogeado = true;
      } else {
        this.estaLogeado = false;
      }
    });
  }

  async registrar(usuario: Usuario) {
    return createUserWithEmailAndPassword(
      this.auth,
      usuario.email,
      usuario.clave
    );
  }

  async iniciarSesion(usuario: Usuario) {
    return signInWithEmailAndPassword(this.auth, usuario.email, usuario.clave);
  }

  async cerrarSesion() {
    return signOut(this.auth).then(() => {
      this.estaLogeado = false;
    });
  }

  estaSesionActiva(): boolean {
    return this.estaLogeado;
  }
}
