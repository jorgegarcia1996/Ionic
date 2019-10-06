import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  value: number;

  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  changeValue(num: number) {
    this.value += num;
  }

  resetValue() {
    this.value = 0;
  }

}
