import { Usuario } from './usuario';

export class UsuarioController {
  public static crearParaIniciarSesion(email: string, clave: string): Usuario {
    let ret = new Usuario();
    ret.setEmail(email);
    ret.setClave(clave);
    return ret;
  }
  public static crearParaRegistrar(
    nombre: string,
    email: string,
    clave: string
  ): Usuario {
    let ret = new Usuario();
    ret.setNombre(nombre);
    ret.setEmail(email);
    ret.setClave(clave);
    return ret;
  }
}
