import { Component,OnInit } from '@angular/core';
import { ConsultasapiService } from 'src/app/services/consultasapi.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  articulo: any;
  id: any = null;

  constructor(
    private consulta: ConsultasapiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.id = this._route.snapshot.paramMap.get('id');
    this.consulta.getProductDetail(this.id)
    .subscribe(result => this.articulo = result)
    console.log(this.articulo);


  }
}
