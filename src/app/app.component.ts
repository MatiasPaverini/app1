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
    
    resultadoEdadProm:string;
    
    constructor(){

      this.resultadoEdadSuma = 0;
      this.resultadoEdadProm = '0';

    }

  
  public sumar() :void {

    this.edadUno = document.getElementById('edadUno') as HTMLInputElement;

    this.edadDos = document.getElementById('edadDos') as HTMLInputElement;


    this.resultadoEdadSuma = parseInt(this.edadUno.value) + parseInt(this.edadDos.value);

    this.resultadoEdadProm = (this.resultadoEdadSuma / 2).toString();

    
  }

  /**
   * limpiar
   */
  public limpiar() :void {

    (document.getElementById('edadUno') as HTMLInputElement).value = '';
    (document.getElementById('edadDos') as HTMLInputElement).value = '';
    (document.getElementById('suma') as HTMLInputElement).value = '';
    (document.getElementById('prom') as HTMLInputElement).value = '';
  }


}
