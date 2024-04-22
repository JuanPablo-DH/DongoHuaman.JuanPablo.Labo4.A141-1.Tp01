import { Usuario } from "./usuario";

export class UsuarioController
{
  public static crearParaLogin(pEmail:string, pClave:string) : Usuario
  {
    let ret = new Usuario();
    try
    {
      ret.setEmail(pEmail);
      ret.setClave(pClave);
      return ret;
    }
    catch(error)
    {
      throw error;
    }
  }
  public static crearParaRegistro(pNombre:string, pEmail:string, pClave:string) : Usuario
  {
    let ret = new Usuario();
    try
    {
      ret.setNombre(pNombre);
      ret.setEmail(pEmail);
      ret.setClave(pClave);
      return ret;
    }
    catch(error)
    {
      throw error;
    }
  }  
  public static logear(pUsuario:Usuario) : boolean
  {
    return Usuario.logear(pUsuario);
  }
  public static registrar(pUsuario:Usuario) : boolean
  {
    return Usuario.registrar(pUsuario);
  }
}