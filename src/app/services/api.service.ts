import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, partition } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrlArgentina = 'https://restcountries.com/v3.1/name/argentina';
  private apiUrlEstadosUnidos = 'https://restcountries.com/v3.1/name/usa';
  private apiUrlBrasil = 'https://restcountries.com/v3.1/name/brasil';
  private apiUrlAnimalPerro = 'https://dog.ceo/api/breeds/image/random';
  private apiUrlAnimalZorro = 'https://randomfox.ca/floof/';

  constructor(private http: HttpClient) {}

  async getImagenPerro() {
    const r = await fetch(this.apiUrlAnimalPerro);
    const perro = await r.json();
    return perro;
  }
  async getImagenZorro() {
    const r = await fetch(this.apiUrlAnimalZorro);
    const zorro = await r.json();
    return zorro;
  }

  async getArgentina() {
    const r = await fetch(this.apiUrlArgentina);
    const pais = await r.json();
    return pais[0];
  }
  async getEstadosUnidos() {
    const r = await fetch(this.apiUrlEstadosUnidos);
    const pais = await r.json();
    return pais[0];
  }
  async getBrasil() {
    const r = await fetch(this.apiUrlBrasil);
    const pais = await r.json();
    return pais[0];
  }

  private async getFetch(url: string) {
    try {
      let response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
  private async getHttpClient(url: string) {
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }
}
