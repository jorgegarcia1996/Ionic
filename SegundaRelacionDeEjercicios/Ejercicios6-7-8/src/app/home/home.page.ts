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
  clicked: boolean;
  index: number;

  constructor(private service: FilmService) {
  }

  ionViewWillEnter() {
    this.films = this.service.getFilms();
    this.films.forEach(f => f.cover = "assets/img/" + f.cover);
  }

  showDetails(title: string) {
    this.index = this.films.findIndex(f => f.title == title);
    this.clicked = !this.clicked;
  }
}
