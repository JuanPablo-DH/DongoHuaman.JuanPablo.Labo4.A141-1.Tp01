import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Puntaje } from '../classes/puntaje.class';
import { firstValueFrom, isObservable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuntajeService {
  private bdPuntajesAhorcado: string = 'tp01_puntajes_ahorcado';
  private bdPuntajesMayorMenor: string = 'tp01_puntajes_mayor_menor';
  private bdPuntajesPreguntados: string = 'tp01_puntajes_preguntados';
  private bdPuntajesPrediccion: string = 'tp01_puntajes_prediccion';
  private bdUsuarios = 'usuarios';
  static AHORCADO: string = 'ahorcado';
  static MAYORMENOR: string = 'mayorMenor';
  static PREGUNTADOS: string = 'preguntados';
  static PREDICCION: string = 'prediccion';

  constructor(private databaseService: DatabaseService) {}

  traerTodos(juego: string) {
    switch (juego) {
      case 'ahorcado':
        return this.databaseService.traerTodos(this.bdPuntajesAhorcado);
      case 'mayorMenor':
        return this.databaseService.traerTodos(this.bdPuntajesMayorMenor);
      case 'preguntados':
        return this.databaseService.traerTodos(this.bdPuntajesPreguntados);
      default:
        return this.databaseService.traerTodos(this.bdPuntajesPrediccion);
    }
  }
  insertar(puntaje: Puntaje, juego: string): Promise<any> {
    return new Promise(async (exito, error) => {
      try {
        let bd: string;
        switch (juego) {
          case 'ahorcado':
            bd = this.bdPuntajesAhorcado;
            break;
          case 'mayorMenor':
            bd = this.bdPuntajesMayorMenor;
            break;
          case 'preguntados':
            bd = this.bdPuntajesPreguntados;
            break;
          default:
            bd = this.bdPuntajesPrediccion;
        }

        const usuarioPromise = this.databaseService.traerPorId(
          puntaje.usuarioId,
          this.bdUsuarios
        );
        if (isObservable(usuarioPromise)) {
          const usuario: any = await firstValueFrom(usuarioPromise);
          if (usuario) {
            puntaje.usuarioNombre = usuario.nombre;
          }
        }

        const scoresPromise = this.databaseService.traerTodos(bd);
        if (isObservable(scoresPromise)) {
          const listaResponse: any = await firstValueFrom(scoresPromise);
          if (listaResponse) {
            if (listaResponse.length > 0) {
              listaResponse.sort((a: any, b: any) => b['id'] - a['id']);

              puntaje.id = Number(listaResponse[0]['id']) + 1;
            } else {
              puntaje.id = 1;
            }

            let lista = listaResponse.map((item: any) => {
              return Puntaje.parseObjetoConAtributosString(item);
            });

            let existeUsuario = false;

            for (let item of lista) {
              if (item.usuarioId === puntaje.usuarioId) {
                existeUsuario = true;
                break;
              }
            }

            if (existeUsuario) {
              for (let item of lista) {
                if (item.usuarioId === puntaje.usuarioId) {
                  item.score += puntaje.score;
                  this.modificarDirecto(item, bd);
                  break;
                }
              }
              exito('Se sumo tu puntaje');
              return;
            }

            if (!existeUsuario) {
              this.insertarDirecto(puntaje, bd);
              exito('Se agrego tu puntaje a la lista');
              return;
            }
          }
        }
        exito('No se pudo realizar nada con el puntaje');
      } catch (e) {
        console.log('PuntajeService.insertar()', e);
      }
    });
  }

  private insertarDirecto(puntaje: Puntaje, bd: string) {
    let docData = Puntaje.getObjetoConAtributosString(puntaje);
    return this.databaseService.insertarConId(docData.id, docData, bd);
  }
  private modificarDirecto(puntaje: Puntaje, bd: string) {
    let docData = Puntaje.getObjetoConAtributosString(puntaje);
    return this.databaseService.modificar(docData.id, docData, bd);
  }
}
