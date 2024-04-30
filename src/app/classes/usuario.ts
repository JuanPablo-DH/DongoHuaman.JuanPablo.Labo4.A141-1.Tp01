export class Usuario {
  public nombre: string = '';
  public email: string = '';
  public clave: string = '';
  public fechaRegistro: Date;

  constructor() {
    this.fechaRegistro = new Date();
  }

  private static validarNombre(pNombre: string): void {
    if (!/^[a-zA-Z0-9]+$/.test(pNombre)) {
      throw 'El nombre debe tener letras y/o numeros';
    }
  }
  private static validarEmail(pEmail: string): void {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(pEmail)) {
      throw 'Email no válido';
    }
  }
  private static validarClave(pClave: string): void {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pClave)) {
      throw 'La contraseña debe tener como minimo 6 caracteres e incluir al menos una letra y un numero';
    }
  }

  public setNombre(pNombre: string): void {
    pNombre.toUpperCase();
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
