import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Swalert } from '../../../classes/swalert.class';

@Component({
  selector: 'app-juego-uno',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './juego-uno.component.html',
  styleUrl: './juego-uno.component.css',
})
export class JuegoUnoComponent implements OnInit {
  palabra: string[] = 'ARGENTINA'.toUpperCase().replace(/\s/g, '').split('');
  letras: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  letrasSeleccionadas: string[] = [];
  contadorErrores: number = 0;
  estaDetenido: boolean = false;
  puntaje: number = 0;

  constructor() {}

  ngOnInit(): void {}

  validarSiGano() {
    const letrasSeleccionadasEstanPresentes = this.palabra.every((letra) =>
      this.letrasSeleccionadas.includes(letra)
    ); // Verificar existencia de las letras seleccionadas en la palabra

    if (letrasSeleccionadasEstanPresentes) {
      if (this.contadorErrores === 0) {
        this.puntaje = 5;
      } else {
        this.puntaje = 2;
      }
      Swalert.alertJuegoTerminado(`Tu puntaje fue: ${this.puntaje}`).then(
        () => {
          this.reiniciarJuego();
        }
      );
    } else {
      Swalert.alertJuegoGanaste(':D');
    }
  }

  validarSiPerdio() {
    if (this.contadorErrores === 6) {
      this.estaDetenido = true;
      Swalert.alertJuegoTerminado(`Tu puntaje fue: ${this.puntaje}`).then(
        () => {
          this.reiniciarJuego();
        }
      );
    } else {
      Swalert.alertJuegoPerdiste(':(');
    }
  }

  elegirLetra(letra: string) {
    if (!this.letrasSeleccionadas.includes(letra)) {
      this.letrasSeleccionadas.push(letra);
      if (!this.palabra.includes(letra)) {
        this.contadorErrores++;
        this.validarSiPerdio();
        return;
      }
    }
    this.validarSiGano();
  }

  reiniciarJuego() {
    this.letrasSeleccionadas = [];
    this.contadorErrores = 0;
    this.estaDetenido = false;
  }

  letraEstaDeshabilitada(letra: string): boolean {
    return this.letrasSeleccionadas.includes(letra);
  }
}
