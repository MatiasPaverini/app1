import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app1';

  edadUno = document.getElementById('edadUno');

  edadDos = document.getElementById('edadDos');

  resultadoEdad;
}
