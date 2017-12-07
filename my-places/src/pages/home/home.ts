import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { NewPlacePage } from '../new-place/new-place';

import { PlacePage } from '../place/place';
import { PlacesService } from '../../services/places.service';

import { place } from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public navCtrl: NavController, private placesService: PlacesService, private modelController: ModalController) {
  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: place) {
    this.modelController.create(PlacePage, place).present();
  }

}
