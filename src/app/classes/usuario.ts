export class Usuario
{
  public nombre:string;
  public email:string;
  public clave:string;
  
  constructor(pNombre?: string, pEmail?: string, pClaveUno?: string)
  {
    this.nombre = pNombre || "";
    this.email = pEmail || "";
    this.clave = pClaveUno || "";
  }

  private static validarNombre(pNombre:string) : void
  {
    if (!/^[a-zA-Z0-9]+$/.test(pNombre))
    {
      throw "El nombre debe tener letras y/o numeros";
    }
  }
  private static validarEmail(pEmail:string) : void
  {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(pEmail))
    {
      throw "Email no válido";
    }
  }
  private static validarClave(pClave:string) : void
  {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/.test(pClave))
    {
      throw "La contraseña debe tener al menos 3 caracteres, incluyendo al menos una letra y un numero";
    }
  }

  public setNombre(pNombre:string) : void
  {
    pNombre.toUpperCase();

    Usuario.validarNombre(pNombre);

    this.nombre = pNombre;
  }
  public setEmail(pEmail: string) : void
  {
    pEmail.toLowerCase();

    Usuario.validarEmail(pEmail);

    this.email = pEmail;
  }
  public setClave(pClaveUno: string) : void
  {
    Usuario.validarClave(pClaveUno)

    this.clave = pClaveUno;
  }
  public getEmail() : string
  {
    return this.email;
  }
  public getClave() : string
  {
    return this.clave;
  }

  private equals(pUsuario:Usuario, pTipoCriterio:string) : boolean
  {
    pTipoCriterio.toLowerCase();

    switch(pTipoCriterio)
    {
      case "login":
        return (this.email === pUsuario.email && this.clave === pUsuario.clave);
      break;

      case "registrar":
        return (this.email === pUsuario.email);
      break;

      default:
        return false;
      break;
    }
  }

  public static jsonToLista(pJsonLista:string) : Usuario[]
  {
      let lista = JSON.parse(pJsonLista);
      let ret: Usuario[] = [];

      for (let i = 0; i < lista.length; i++)
      {
        if (lista[i].nombre && lista[i].email && lista[i].clave)
        {
          ret.push(new Usuario(lista[i].nombre, lista[i].email, lista[i].clave));
        }
      }

      return ret;
  }
  public static jsonToInstancia(pJsonInstancia:string) : Usuario
  {
    let usuario = JSON.parse(pJsonInstancia);

    if(usuario.nombre && usuario.email && usuario.clave)
    {
      return new Usuario(usuario.nombre, usuario.email, usuario.clave);
    }

    return new Usuario();
  }

  public static logear(pUsuario:Usuario) : boolean
  {
    let bdUsuarios = Usuario.bdSelectAll();

    console.log(bdUsuarios);

    for(let i=0; i<bdUsuarios.length; i++)
    {
      if(bdUsuarios[i].equals(pUsuario, "login"))
      {
        return true;
      }
    }
    
    return false;
  }
  public static registrar(pUsuario:Usuario) : boolean
  {
    let bdUsuarios = Usuario.bdSelectAll();

    for(let i=0; i<bdUsuarios.length; i++)
    {
      if(bdUsuarios[i].equals(pUsuario, "registrar"))
      {
        return false;
      }
    }

    Usuario.bdInsertar(pUsuario);
    return true;
  }

  public static bdSelectAll() : Usuario[]
  {
    let jsonTexto = localStorage.getItem("usuarios");
    let listaUsuarios:Usuario[] = [];

    if(jsonTexto === null)
    {
      return listaUsuarios;
    }

    return Usuario.jsonToLista(jsonTexto);
  }
  private static bdInsertar(pUsuario:Usuario) : void
  {
    let bdUsuarios = Usuario.bdSelectAll();
    bdUsuarios.push(pUsuario);
    localStorage.setItem("usuarios", JSON.stringify(bdUsuarios));
  }
  private static bdUpdate(pUsuario:Usuario) : void
  {
    
  }
  private static bdDelete(pUsuario:Usuario) : void
  {
    
  }
}