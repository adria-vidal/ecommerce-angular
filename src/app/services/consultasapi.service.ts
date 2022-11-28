import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsultasapiService {
  constructor(private http: HttpClient) {}
  
  retornar() {
    return this.http.get(`https://api.escuelajs.co/api/v1/products`);

  }
  // obtener id del personaje
  getId(id: number) {
    return this.http.get(`https://api.escuelajs.co/api/v1/products${id}`);
  }
}
