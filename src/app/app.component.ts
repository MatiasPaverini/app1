import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app1';
    edadUno:HTMLElement;

    edadDos:HTMLElement;

    resultadoEdadSuma:number;
    
    resultadoEdadProm:number;
    
    constructor(){

      this.resultadoEdadSuma = 0;
      this.resultadoEdadProm = 0;

    }

  
  public onClick() :void {
    this.edadUno = document.getElementById('edadUno');

    this.edadDos = document.getElementById('edadDos');

    this.resultadoEdadSuma = parseInt(this.edadUno.innerText) + parseInt(this.edadDos.innerText);

    this.resultadoEdadProm = this.resultadoEdadSuma % 2;

    
  }


}
