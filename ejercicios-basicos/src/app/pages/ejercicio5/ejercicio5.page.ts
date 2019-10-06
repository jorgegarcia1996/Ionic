import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.page.html',
  styleUrls: ['./ejercicio5.page.scss'],
})
export class Ejercicio5Page implements OnInit {

  min: number;
  max: number;
  value: number;

  constructor() { }

  ngOnInit() {
    this.min = 0;
    this.max = 0;
    this.value = 0;
  }

  generate() {
    this.value = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));

  }

}
