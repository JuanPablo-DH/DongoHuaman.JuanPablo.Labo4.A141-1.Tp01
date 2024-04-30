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
  ) {
    this.databaseService.setBd('usuarios');
  }

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.getUsuario().email;

    this.databaseService.traerTodos()?.subscribe((res) => {
      this.listaUsuarios = res;
      //console.log('listaUsuarios', this.listaUsuarios);
    });

    this.databaseService
      .traerPorId(this.usuarioService.getUsuario().email)
      ?.subscribe((res) => {
        this.usuarioObtenido = res;
        //console.log(res);
      });
  }
}
