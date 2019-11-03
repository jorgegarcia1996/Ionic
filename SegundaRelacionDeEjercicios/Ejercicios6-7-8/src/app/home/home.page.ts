import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films: Film[];

  constructor(private service: FilmService) {
  }

  ionViewWillEnter() {
    this.films = this.service.getFilms();
  }
}
