import { Component, Injectable, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';
import { NgFor, NgIf } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';

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
  ahorcadoPuntajes = [
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
  ];
  mayorOMenorPuntajes = [
    { usuario: 'User3', puntaje: 120 },
    { usuario: 'User4', puntaje: 110 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
  ];
  preguntadosPuntajes = [
    { usuario: 'User5', puntaje: 80 },
    { usuario: 'User6', puntaje: 70 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
  ];

  prediccionPuntajes = [
    { usuario: 'User7', puntaje: 130 },
    { usuario: 'User8', puntaje: 125 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
    { usuario: 'User1', puntaje: 100 },
    { usuario: 'User2', puntaje: 90 },
  ];
  mostrarSpinner: boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.mostrarSpinner = true;
    this.emailUsuario = this.usuarioService.getEmail();

    //this.usuarioService.traerTodos()?.subscribe((r) => {
    //this.listaUsuarios = r;
    //});

    this.usuarioService.traerPorId(this.emailUsuario)?.subscribe((r) => {
      this.usuarioObtenido = r;
      this.mostrarSpinner = false;
    });
  }
}
