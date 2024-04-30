import { Usuario } from './usuario';

export class UsuarioController {
  public static crearParaIniciarSesion(email: string, clave: string): Usuario {
    let ret = new Usuario();
    try {
      ret.setEmail(email);
      ret.setClave(clave);
      return ret;
    } catch (error) {
      throw error;
    }
  }
  public static crearParaRegistrar(
    nombre: string,
    email: string,
    clave: string
  ): Usuario {
    let ret = new Usuario();
    try {
      ret.setNombre(nombre);
      ret.setEmail(email);
      ret.setClave(clave);
      return ret;
    } catch (error) {
      throw error;
    }
  }
}
