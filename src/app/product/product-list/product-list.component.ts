import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///Directivas *ngif If que genera una validacion dependiendo si hay una validacion o nada

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

productos:IProductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://www.nissanframework.com/resourcefiles/g-vehicle-detail-gallery-images/gallery-photo-4-nissan-sentra.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"Febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://img.remediosdigitales.com/f55210/audi-a4-2021-opiniones-prueba-mexico_/1366_2000.jpg"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/20202605-KIA-RIO-2021-PORTADA.jpg"
  },
]

}
