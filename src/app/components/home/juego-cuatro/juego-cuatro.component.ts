import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-cuatro',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './juego-cuatro.component.html',
  styleUrl: './juego-cuatro.component.css',
})
export class JuegoCuatroComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
