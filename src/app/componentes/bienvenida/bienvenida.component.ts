import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor() { }


  public ejemplo = 'hola';

  ngOnInit(): void {
  }

  PruebaClick() {
    this.ejemplo = 'ejecutado';
  }

}
