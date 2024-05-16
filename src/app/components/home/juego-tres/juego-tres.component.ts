import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Swalert } from '../../../classes/swalert.class';

@Component({
  selector: 'app-juego-tres',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './juego-tres.component.html',
  styleUrl: './juego-tres.component.css',
})
export class JuegoTresComponent {
  preguntaActual: any | null = null;
  contadorPregunta: number = 1;
  puntaje: number = 0;
  opcionesSeleccionadas: boolean[] = [false, false, false, false];

  constructor(private apiService: ApiService) {
    this.cargarNuevaPregunta();
  }

  ngOnInit(): void {}

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
    switch (this.contadorPregunta) {
      case 1:
        this.cargarBanderaArgentina();
        break;
      case 2:
        this.cargarBanderaEstadoUnidos();
        break;
      case 3:
        this.cargarBanderaBrasil();
        break;
      case 4:
        this.cargarPerro();
        break;
      case 5:
        this.cargarZorro();
        break;
      default:
        // Fin del juego (Reinicio)
        this.contadorPregunta--; // Evita que se muestre 6° al finalizar la ultima pregunta
        this.opcionesSeleccionadas = [true, true, true, true]; // Arregla los disabled al terminar el juego
        Swalert.alertJuegoTerminado(
          `Juego terminado tu puntaje fue: ${this.puntaje}`
        ).then(() => {
          this.puntaje = 0;
          this.contadorPregunta = 1;
          this.opcionesSeleccionadas = [false, false, false, false];
          this.cargarNuevaPregunta();
        });

        break;
    }
  }

  private cargarBanderaArgentina() {
    this.apiService.getArgentina().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: ['Corrientes', 'Argentina', 'Paraguay', 'Santa Fe'],
        respuestaCorrecta: 1,
      };
    });
  }
  private cargarBanderaEstadoUnidos() {
    this.apiService.getEstadosUnidos().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: ['Rusia', 'España', 'Peru', 'Estados Unidos'],
        respuestaCorrecta: 3,
      };
    });
  }
  private cargarBanderaBrasil() {
    this.apiService.getBrasil().then((pais) => {
      this.preguntaActual = {
        pregunta: '¿De que pais es esta Bandera?',
        imagenUrl: pais.flags.png,
        opciones: ['Brasil', 'China', 'Uruguay', 'Bolivia'],
        respuestaCorrecta: 0,
      };
    });
  }
  private cargarPerro() {
    this.apiService.getImagenPerro().then((perro) => {
      this.preguntaActual = {
        pregunta: '¿Que animal es?',
        imagenUrl: perro.message,
        opciones: ['Chancho', 'Gato', 'Perro', 'Pollo'],
        respuestaCorrecta: 2,
      };
    });
  }
  private cargarZorro() {
    this.apiService.getImagenZorro().then((zorro) => {
      this.preguntaActual = {
        pregunta: '¿Que animal es?',
        imagenUrl: zorro.image,
        opciones: ['Hormiga', 'Mosquito', 'Zorro', 'Auto'],
        respuestaCorrecta: 2,
      };
    });
  }
}
