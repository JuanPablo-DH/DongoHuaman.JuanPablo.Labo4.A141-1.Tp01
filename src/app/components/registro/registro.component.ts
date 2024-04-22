import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  public nombre:string = "";
  public email:string = "";
  public clave:string = "";

  constructor(private router: Router) { }

  public registrar()
  {
    let usuario:Usuario;

    try
    {
      usuario = UsuarioController.crearParaRegistro(this.nombre, this.email, this.clave);
    }
    catch(error)
    {
      alert(error);
      return;
    }

    if(UsuarioController.registrar(usuario) === false)
    {
      alert("Registrar ERROR");
      return;
    }
    
    alert("Registrar EXITO");
  }
}
