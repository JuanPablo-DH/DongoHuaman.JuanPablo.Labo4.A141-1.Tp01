import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  public saludar(pMensaje : string) : void
  {
    alert(pMensaje);
  }
}
