import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app1';
    edadUno:HTMLInputElement;

    edadDos:HTMLInputElement;

    resultadoEdadSuma:number;
    
    resultadoEdadProm:number;
    
    constructor(){

      this.resultadoEdadSuma = 0;
      this.resultadoEdadProm = 0;

    }

  
  public sumar() :void {
    this.edadUno = document.getElementById('edadUno');
    console.log(this.edadUno)

    this.edadDos = document.getElementById('edadDos');

    console.log(this.edadDos);

    this.resultadoEdadSuma = parseInt(this.edadUno.value) + parseInt(this.edadDos.value);

    console.log(this.resultadoEdadSuma);

    this.resultadoEdadProm = this.resultadoEdadSuma % 2;

    
  }


}
