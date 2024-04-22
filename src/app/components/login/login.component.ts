import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email:string = "";
  public clave:string = "";
  
  constructor(private router: Router) { }

  public logear() : void
  {
    let usuario:Usuario;

    try
    {
      usuario = UsuarioController.crearParaLogin(this.email, this.clave);
    }
    catch(error)
    {
      alert(error);
      return;
    }

    if(UsuarioController.logear(usuario) === false)
    {
      alert("Logeo ERROR");
      return;
    }
    
    alert("Bienvenido " + usuario.email);
  }
}
