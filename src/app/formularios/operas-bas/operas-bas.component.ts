import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  sumar: string = '';
  restar: string ='';
  multiplicar: string ='';
  dividir: string ='';
  num1:string='';
  num2:string='';
  resultado:number=0;
  
  validar():void{
    if(this.sumar){
      this.resultado=parseInt(this.num1)+parseInt(this.num2);
    }
    if(this.restar){
      this.resultado=parseInt(this.num1)-parseInt(this.num2);
    }
    if(this.multiplicar){
      this.resultado=parseInt(this.num1)*parseInt(this.num2);
    }
    if(this.dividir){
      this.resultado=parseInt(this.num1)/parseInt(this.num2);
    }
  }

}
