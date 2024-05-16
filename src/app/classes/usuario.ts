export class Usuario {
  public nombre: string;
  public email: string;
  public clave: string;
  public fechaRegistro: Date = new Date();

  constructor(nombre?: string, email?: string, clave?: string) {
    this.nombre = nombre || '';
    this.email = email || '';
    this.clave = clave || '';
  }

  private static validarNombre(pNombre: string): void {
    if (pNombre === '') {
      throw 'El nombre no puede estar vacio';
    }
    if (!/^[a-zA-Z0-9]+$/.test(pNombre)) {
      throw 'El nombre debe contener solo letras y/o números';
    }
  }
  private static validarEmail(pEmail: string): void {
    if (pEmail === '') {
      throw 'El correo no puede estar vacio';
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(pEmail)) {
      throw 'El formato del correo no es válido';
    }
  }
  private static validarClave(pClave: string): void {
    if (pClave === '') {
      throw 'La contraseña no puede estar vacía';
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pClave)) {
      throw 'La contraseña debe tener al menos 6 caracteres, con numeros y letras';
    }
  }

  public setNombre(pNombre: string): void {
    pNombre.toLowerCase();
    Usuario.validarNombre(pNombre);
    this.nombre = pNombre;
  }
  public setEmail(pEmail: string): void {
    pEmail.toLowerCase();
    Usuario.validarEmail(pEmail);
    this.email = pEmail;
  }
  public setClave(pClaveUno: string): void {
    Usuario.validarClave(pClaveUno);
    this.clave = pClaveUno;
  }
  public setFechaRegistro(): void {
    this.fechaRegistro = new Date();
  }
}
