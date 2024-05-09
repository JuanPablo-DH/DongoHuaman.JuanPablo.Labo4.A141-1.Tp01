import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public bd = 'tp01_mensajes';

  constructor(private database: DatabaseService) {}

  enviarMensaje(pEmisor: string, pTexto: string) {
    this.database.insertar(
      { emisor: pEmisor, texto: pTexto, fechaEnvio: new Date().toISOString() },
      this.bd
    );
  }

  traerTodos() {
    return this.database.traerTodos(this.bd);
  }

  static ordenarPorFecha(listaMensajes: any[]) {
    // Ordenar los mensajes por fecha de envío
    return listaMensajes.sort((a, b) => {
      // Convertir las fechas a objetos Date para comparar
      const dateA = new Date(a.fechaEnvio);
      const dateB = new Date(b.fechaEnvio);
      // Devolver la diferencia entre las fechas
      return dateA.getTime() - dateB.getTime();
    });
  }
}
