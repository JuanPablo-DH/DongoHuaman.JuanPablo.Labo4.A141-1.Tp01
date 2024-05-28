import { Component, Injectable, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';
import { PuntajeService } from '../../../services/puntaje.service';
import { Puntaje } from '../../../classes/puntaje.class';

@Component({
  selector: 'app-info-usuario',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css',
})
export class InfoUsuarioComponent implements OnInit {
  public listaUsuarios: any[] = [];
  public usuarioObtenido: any = { nombre: '' };
  public emailUsuario: string = '';

  ahorcadoPuntajes: Puntaje[] = [];
  mayorOMenorPuntajes: Puntaje[] = [];
  preguntadosPuntajes: Puntaje[] = [];
  prediccionPuntajes: Puntaje[] = [];

  mostrarSpinner: boolean = false;

  constructor(
    private puntajeService: PuntajeService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.mostrarSpinner = true;
    this.emailUsuario = this.usuarioService.getEmail();

    this.usuarioService.traerPorId(this.emailUsuario)?.subscribe((r) => {
      this.usuarioObtenido = r;
      this.mostrarSpinner = false;
    });

    this.puntajeService.traerTodos(PuntajeService.AHORCADO)?.subscribe((r) => {
      if (r) {
        this.ahorcadoPuntajes = r.map((item) => {
          return Puntaje.parseObjetoConAtributosString(item);
        });
        this.ahorcadoPuntajes.sort((a, b) => {
          return b.score - a.score;
        });
      }
    });
    this.puntajeService
      .traerTodos(PuntajeService.MAYORMENOR)
      ?.subscribe((r) => {
        if (r) {
          this.mayorOMenorPuntajes = r.map((item) => {
            return Puntaje.parseObjetoConAtributosString(item);
          });
          this.mayorOMenorPuntajes.sort((a, b) => {
            return b.score - a.score;
          });
        }
      });
    this.puntajeService
      .traerTodos(PuntajeService.PREGUNTADOS)
      ?.subscribe((r) => {
        if (r) {
          this.preguntadosPuntajes = r.map((item) => {
            return Puntaje.parseObjetoConAtributosString(item);
          });
          this.preguntadosPuntajes.sort((a, b) => {
            return b.score - a.score;
          });
        }
      });
    this.puntajeService
      .traerTodos(PuntajeService.PREDICCION)
      ?.subscribe((r) => {
        if (r) {
          this.prediccionPuntajes = r.map((item) => {
            return Puntaje.parseObjetoConAtributosString(item);
          });
          this.prediccionPuntajes.sort((a, b) => {
            return b.score - a.score;
          });
        }
      });
  }
}
