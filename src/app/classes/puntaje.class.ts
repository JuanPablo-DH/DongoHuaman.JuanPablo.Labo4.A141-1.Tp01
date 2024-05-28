export class Puntaje {
  public id: number;
  public usuarioId: string;
  public usuarioNombre: string;
  public score: number;

  constructor() {
    this.id = 0;
    this.usuarioId = '';
    this.usuarioNombre = '';
    this.score = 0;
  }

  static getObjetoConAtributosString(puntaje: Puntaje) {
    return {
      id: puntaje.id.toString(),
      usuarioId: puntaje.usuarioId,
      usuarioNombre: puntaje.usuarioNombre,
      score: puntaje.score.toString(),
    };
  }
  static parseObjetoConAtributosString(objeto: any) {
    let puntaje = new Puntaje();
    puntaje.id = Number(objeto.id);
    puntaje.usuarioId = objeto.usuarioId;
    puntaje.usuarioNombre = objeto.usuarioNombre;
    puntaje.score = Number(objeto.score);
    return puntaje;
  }
}
