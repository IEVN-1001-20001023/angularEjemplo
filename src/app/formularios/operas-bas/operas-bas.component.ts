import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  operacionSeleccionada: string = '';
  Sumas:string='suma'
  Resta:string='resta'
  Mult:string='mult'
  cuma:string='';
  num1:string='';
  num2:string='';
  resultado:number=0;
  RB:string='';
  sumar():void{
    0
  }
  restar():void{
    0
  }
  multiplicar():void{
    0
  }
  dividir():void{
    0
  }
  validar():void{
    if(this.Sumas){
      this.resultado=parseInt(this.num1)+parseInt(this.num2);
    }else{if(this.Resta){
      this.resultado=parseInt(this.num1)-parseInt(this.num2);
    }else{if(this.Mult){
      this.resultado=parseInt(this.num1)*parseInt(this.num2);
    }}}
    
  }

}
