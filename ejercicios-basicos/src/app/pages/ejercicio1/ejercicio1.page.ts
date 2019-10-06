import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  name: string;
  constructor() { }

  ngOnInit() {
    this.name = "";
  }

  showName() {
    this.name = "Jorge García Molina";
  }

  clearName() {
    this.name = "";
  }

}
