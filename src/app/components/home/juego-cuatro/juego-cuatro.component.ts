import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Swalert } from '../../../classes/swalert.class';
import { Puntaje } from '../../../classes/puntaje.class';
import { UsuarioService } from '../../../services/usuario.service';
import { PuntajeService } from '../../../services/puntaje.service';

@Component({
  selector: 'app-juego-cuatro',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './juego-cuatro.component.html',
  styleUrl: './juego-cuatro.component.css',
})
export class JuegoCuatroComponent implements OnInit {
  listaValorDados: number[] = [1, 1, 1, 1, 1, 1];
  listaValoresSeleccionados: number[] = [0, 0, 0, 0, 0, 0];
  numeros: number[] = [1, 2, 3, 4, 5, 6];
  puntaje: number = 0;
  estaDetenido: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private puntajeService: PuntajeService
  ) {}

  ngOnInit(): void {}

  seleccionarValor(indiceValorSeleccionado: number, valor: number) {
    this.listaValoresSeleccionados[indiceValorSeleccionado] = valor;
  }

  iniciarJuego() {
    this.estaDetenido = false;
    this.puntaje = 0;

    for (let i = 0; i < this.listaValorDados.length; i++) {
      this.lanzarDado(i);
    }

    setTimeout(() => {
      this.calcularPuntaje();
      Swalert.alertJuegoTerminado(`Tu puntaje fue ${this.puntaje}`).then(
        async () => {
          if (this.puntaje != 0) {
            await this.insertarPuntaje();
          }
          this.estaDetenido = true;
          //this.limpiar();
        }
      );
    }, 6000);
  }

  lanzarDado(index: number) {
    const duracionIntervalo = 500; // 'Velocidad' de giro
    const duracionLanzamiento = 6000; // Duracion de lanzamiento

    const interval = setInterval(() => {
      this.listaValorDados[index] = Math.floor(Math.random() * 6) + 1;
    }, duracionIntervalo);

    setTimeout(() => clearInterval(interval), duracionLanzamiento);
  }

  calcularPuntaje() {
    for (let i = 0; i < this.listaValorDados.length; i++) {
      if (this.listaValorDados[i] === this.listaValoresSeleccionados[i]) {
        this.puntaje++;
      }
    }
  }

  getPathDado(valor: number) {
    return `assets/juego-cuatro/dados/dado-${valor}.png`;
  }

  limpiar() {
    this.listaValoresSeleccionados = [0, 0, 0, 0, 0, 0];
  }

  private async insertarPuntaje() {
    let puntaje = new Puntaje();
    puntaje.usuarioId = this.usuarioService.getEmail();
    puntaje.score = this.puntaje;
    const response = await this.puntajeService.insertar(
      puntaje,
      PuntajeService.PREDICCION
    );
    Swalert.alertSeCargoTuPuntaje(response);
  }
}
