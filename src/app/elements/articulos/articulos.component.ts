import { Component, OnInit } from '@angular/core';
import { ConsultasapiService } from 'src/app/services/consultasapi.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  articulos: any;

  constructor(private consulta: ConsultasapiService) {}

  ngOnInit() {
    this.consulta.retornar().subscribe((result) => {
      console.log(result);
      result = this.articulos;
    });
  }
}
