import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultasapiService {
  constructor(private http: HttpClient) {}

  retornar():Observable<any> {
    return this.http.get(`https://api.escuelajs.co/api/v1/products`);

  }
  // obtener id del personaje
  getProductDetail(id: number) {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  getIdCategory(id: number) {
    return this.http.get(`{​https://api.escuelajs.co/api/v1/categories/${id}`);
  }

  getCategory(){
    return this.http.get(`https://api.escuelajs.co/api/v1/categories`);
  }

  getProductsByCategory(id:number){
    return this.http.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
  }

  getFirstProducts(){
    return this.http.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`);

  }


}
