import { Component, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-info-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css'
})
export class InfoUsuarioComponent {
  private volverAlPadreSubject = new Subject<void>();

  volverAlPadre$ = this.volverAlPadreSubject.asObservable();

  emitirVolverAlPadre() {
    this.volverAlPadreSubject.next();
  }
}
