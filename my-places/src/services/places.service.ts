import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { place } from '../model/place.model';

@Injectable()
export class PlacesService {
    private places: place[] = [];

    constructor (private storage: Storage) {}

    addPlace(place: place) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getPlaces() {
        return this.storage.get('places')
            .then(
                (places) => {
                    this.places = places == null ? [] : places;
                    return this.places.slice();
                }
            );
    }
}