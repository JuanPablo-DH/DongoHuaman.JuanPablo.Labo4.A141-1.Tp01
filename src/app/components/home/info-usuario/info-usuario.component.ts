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

  constructor(
    private databaseService: DatabaseService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.getEmail();

    this.usuarioService.traerTodos()?.subscribe((r) => {
      this.listaUsuarios = r;
    });

    this.usuarioService.traerPorId(this.emailUsuario)?.subscribe((r) => {
      this.usuarioObtenido = r;
    });
  }
}
