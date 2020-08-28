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

    this.edadUno = document.getElementById('edadUno') as HTMLInputElement;

    this.edadDos = document.getElementById('edadDos') as HTMLInputElement;


    this.resultadoEdadSuma = parseInt(this.edadUno.value) + parseInt(this.edadDos.value);

    this.resultadoEdadProm = this.resultadoEdadSuma % 2;

    
  }

  /**
   * limpiar
   */
  public limpiar() {
    document.getElementById('edadUno').innerText = '';
    document.getElementById('edadDos').innerText = '';
    document.getElementById('suma').innerText = '';
    document.getElementById('prom').innerText = '';
  }


}
