import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {

  eur: number;
  pts: number;

  constructor() { }

  ngOnInit() {
    this.eur = 0;
    this.pts = 0;
  }

  eurToPts() {
    this.pts = this.eur * 166;
  }

  ptsToEur() {
    this.eur = this.pts / 166;
  }

}
