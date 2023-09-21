import { Component } from '@angular/core';

@Component({//Decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularEjemplo';
}

/*
  export class AppComponent {
  title = 'angularEjemplo';

  apellido='Juarez';

  duplicarNumero(valor:number):number{
    return valor * 2;
  }
  pelicula={
    titulo:'Spiderman',
    fechaLanzamiento:new Date(),
    precio: 75.56
  }
}
*/