import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/services/film.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  film: Film;

  constructor(private activatedRoute: ActivatedRoute,
              private service: FilmService,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get("title");
    this.film = this.service.getFilm(title);
  }

  deleteFilm(title: string) {
    this.service.deleteFilm(title);
    this.router.navigateByUrl("/");
  }

  async presentAlertConfirm(title: string) {
    const alert = await this.alertController.create({
      header: 'Borrar Película',
      message: `Vas a borrar la película <strong>${title}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.deleteFilm(title)
        }
      ]
    });
    await alert.present();
  }

}
