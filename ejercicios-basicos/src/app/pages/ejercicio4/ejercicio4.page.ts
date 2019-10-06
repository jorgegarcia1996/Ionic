import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.page.html',
  styleUrls: ['./ejercicio4.page.scss'],
})
export class Ejercicio4Page implements OnInit {

  name: string;
  hello: string;

  constructor() { }

  ngOnInit() {
    this.name = '';
  }

  sayHello() {
    this.hello = '¡Hola ' + this.name + '!';
  }

}
