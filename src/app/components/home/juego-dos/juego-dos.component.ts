import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Swalert } from '../../../classes/swalert.class';

@Component({
  selector: 'app-juego-dos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './juego-dos.component.html',
  styleUrl: './juego-dos.component.css',
})
export class JuegoDosComponent implements OnInit {
  /* Juego */
  public duracion = 10;
  public baraja: number[] = [];
  public cartaActual: number = 0;
  public cartaAnterior: number = 0;
  public temporizador: any;
  public tiempoRestante: number = this.duracion;
  public puntaje: number = 0;
  public estaDetenido: boolean = true;

  /* Arregla error del temporizador al cambiar de ruta */
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.detenerTemporizador();
      }
    });
  }

  ngOnInit(): void {}

  inicializarBaraja(): void {
    for (let i = 1; i <= 12; i++) {
      this.baraja.push(i);
    }
  }

  mezclarBaraja(): void {
    for (let i = this.baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
    }
  }

  iniciarTemporizador(): void {
    this.estaDetenido = false;
    this.temporizador = setInterval(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante === 0) {
        this.finalizarJuego();
      }
    }, 1000);
  }

  detenerTemporizador(): void {
    clearInterval(this.temporizador);
  }

  empezarJuego() {
    this.inicializarBaraja();
    this.mezclarBaraja();
    this.detenerTemporizador();
    this.iniciarTemporizador();
    this.cartaAnterior = this.cartaActual;
    this.cartaActual = this.baraja.pop() as number;
    this.puntaje = 0;
  }

  finalizarJuego(): void {
    this.detenerTemporizador();
    this.baraja = [];
    this.tiempoRestante = this.duracion;
    this.estaDetenido = true;
    this.cartaActual = 0;
    this.cartaAnterior = 0;
    Swalert.alertJuegoTerminado(`Tu puntaje fue ${this.puntaje}`).then(() => {
      this.puntaje = 0;
    });
  }

  seleccionarMenor(): void {
    if (!this.estaDetenido) {
      if (this.baraja.length === 0) {
        this.finalizarJuego();
        return;
      }

      this.cartaAnterior = this.cartaActual;
      this.cartaActual = this.baraja.pop() as number;

      if (this.cartaActual < this.cartaAnterior) {
        this.puntaje++;
        Swalert.alertJuegoGanaste(':D');
      } else {
        Swalert.alertJuegoPerdiste(':(');
      }
    }
  }

  seleccionarMayor(): void {
    if (!this.estaDetenido) {
      if (this.baraja.length === 0) {
        this.finalizarJuego();
        return;
      }

      this.cartaAnterior = this.cartaActual;
      this.cartaActual = this.baraja.pop() as number;

      if (this.cartaActual > this.cartaAnterior) {
        this.puntaje++;
        Swalert.alertJuegoGanaste(':D');
      } else {
        Swalert.alertJuegoPerdiste(':(');
      }
    }
  }
}
