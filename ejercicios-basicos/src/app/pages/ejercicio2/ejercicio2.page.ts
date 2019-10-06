import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  name: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.name = "";
    this.message = "Mostrar nombre"
  }

  toggleName() {
    if (this.name === "") {
      this.name = "Jorge García Molina";
      this.message = "Borrar nombre";
    } else {
      this.name = "";
      this.message = "Mostrar nombre";
    }
  }
}
