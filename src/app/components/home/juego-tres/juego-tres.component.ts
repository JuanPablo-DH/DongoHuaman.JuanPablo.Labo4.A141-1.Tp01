import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Swalert } from '../../../classes/swalert.class';
import { Puntaje } from '../../../classes/puntaje.class';
import { UsuarioService } from '../../../services/usuario.service';
import { PuntajeService } from '../../../services/puntaje.service';

@Component({
  selector: 'app-juego-tres',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './juego-tres.component.html',
  styleUrl: './juego-tres.component.css',
})
export class JuegoTresComponent {
  private listaFunciones = [
    this.cargarBanderaArgentina.bind(this),
    this.cargarBanderaBrasil.bind(this),
    this.cargarBanderaEstadoUnidos.bind(this),
    this.cargarPerro.bind(this),
    this.cargarZorro.bind(this),
  ];
  preguntaActual: any | null = null;
  contadorPregunta: number = 1;
  puntaje: number = 0;
  opcionesSeleccionadas: boolean[] = [false, false, false, false];
  mostrarSpinner: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private puntajeService: PuntajeService,
    private apiService: ApiService
  ) {
    this.mezclarPreguntas();
    this.cargarNuevaPregunta();
  }

  ngOnInit(): void {}

  mezclarPreguntas(): void {
    this.listaFunciones = this.mezclarLista(this.listaFunciones);
  }

  seleccionarOpcion(indice: number) {
    this.opcionesSeleccionadas = [true, true, true, true];
    if (
      this.preguntaActual &&
      this.preguntaActual.respuestaCorrecta === indice
    ) {
      this.puntaje++;
      Swalert.alertJuegoGanaste(':D');
    } else {
      Swalert.alertJuegoPerdiste(
        `:( La respuesta era '${
          this.preguntaActual.opciones[this.preguntaActual.respuestaCorrecta]
        }'`
      );
    }
    setTimeout(() => {
      if (this.contadorPregunta <= 5) {
        this.contadorPregunta++;
        this.opcionesSeleccionadas = [false, false, false, false];
      }

      this.cargarNuevaPregunta();
    }, 1000);
  }

  cargarNuevaPregunta() {
    if (this.contadorPregunta <= this.listaFunciones.length) {
      this.listaFunciones[this.contadorPregunta - 1]();
    } else {
      // Fin del juego (Reinicio)
      this.contadorPregunta--; // Evita que se muestre 6° al finalizar la ultima pregunta
      this.opcionesSeleccionadas = [true, true, true, true]; // Arregla los disabled al terminar el juego
      Swalert.alertJuegoTerminado(
        `Juego terminado tu puntaje fue: ${this.puntaje}`
      ).then(async () => {
        if (this.puntaje != 0) {
          await this.insertarPuntaje();
        }
        this.puntaje = 0;
        this.contadorPregunta = 1;
        this.opcionesSeleccionadas = [false, false, false, false];
        this.mezclarPreguntas();
        this.cargarNuevaPregunta();
      });
    }
  }

  private cargarBanderaArgentina() {
    let listaOpciones = this.mezclarLista([
      'Corrientes',
      'Argentina',
      'Paraguay',
      'Santa Fe',
    ]);
    this.mostrarSpinner = true;
    this.apiService.getArgentina().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: listaOpciones,
        respuestaCorrecta: listaOpciones.findIndex(
          (opcion) => opcion === 'Argentina'
        ),
      };
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 1000);
    });
  }
  private cargarBanderaEstadoUnidos() {
    let listaOpciones = this.mezclarLista([
      'Rusia',
      'España',
      'Peru',
      'Estados Unidos',
    ]);
    this.mostrarSpinner = true;
    this.apiService.getEstadosUnidos().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: listaOpciones,
        respuestaCorrecta: listaOpciones.findIndex(
          (opcion) => opcion === 'Estados Unidos'
        ),
      };
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 1000);
    });
  }
  private cargarBanderaBrasil() {
    let listaOpciones = this.mezclarLista([
      'Brasil',
      'China',
      'Uruguay',
      'Bolivia',
    ]);
    this.mostrarSpinner = true;
    this.apiService.getBrasil().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: listaOpciones,
        respuestaCorrecta: listaOpciones.findIndex(
          (opcion) => opcion === 'Brasil'
        ),
      };
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 1000);
    });
  }
  private cargarPerro() {
    let listaOpciones = this.mezclarLista([
      'Chancho',
      'Gato',
      'Perro',
      'Pollo',
    ]);
    this.mostrarSpinner = true;
    this.apiService.getImagenPerro().then((perro) => {
      this.preguntaActual = {
        pregunta: '¿Que animal es?',
        imagenUrl: perro.message,
        opciones: listaOpciones,
        respuestaCorrecta: listaOpciones.findIndex(
          (opcion) => opcion === 'Perro'
        ),
      };
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 1000);
    });
  }
  private cargarZorro() {
    let listaOpciones = this.mezclarLista([
      'Hormiga',
      'Mosquito',
      'Zorro',
      'Auto',
    ]);
    this.mostrarSpinner = true;
    this.apiService.getImagenZorro().then((zorro) => {
      this.preguntaActual = {
        pregunta: '¿Que animal es?',
        imagenUrl: zorro.image,
        opciones: listaOpciones,
        respuestaCorrecta: listaOpciones.findIndex(
          (opcion) => opcion === 'Zorro'
        ),
      };
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 2000);
    });
  }

  private mezclarLista(lista: any[]): any[] {
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
  }

  private async insertarPuntaje() {
    let puntaje = new Puntaje();
    puntaje.usuarioId = this.usuarioService.getEmail();
    puntaje.score = this.puntaje;
    const response = await this.puntajeService.insertar(
      puntaje,
      PuntajeService.PREGUNTADOS
    );
    Swalert.alertSeCargoTuPuntaje(response);
  }
}
