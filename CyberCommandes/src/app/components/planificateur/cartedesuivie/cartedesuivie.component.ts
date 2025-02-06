import { Component, computed, effect, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, icon, LatLng, latLng, Layer, MapOptions, marker, Marker, polyline, Polyline, tileLayer } from 'leaflet';
import { GeoServiceService } from '../services/geo-service.service'; 

@Component({
  selector: 'app-cartedesuivie',
  imports: [
    LeafletModule,
    FormsModule,
  ],
  templateUrl: './cartedesuivie.component.html',
  styleUrl: './cartedesuivie.component.css'
})
export class CartedesuivieComponent {

  readonly latitude = model<number>(45.166672);
  readonly longitude = model<number>(5.71667);
  readonly zoom = model<number>(12);


  clickOnMap = output<LatLng>();

  readonly center = computed(() => latLng(this.latitude(), this.longitude()));

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  address: string = '';

  constructor(private geoService: GeoServiceService) { }

  


  async onMapClick(latlng: LatLng): Promise<void> {
    this.clickOnMap.emit(latlng);
    this.latitude.set(latlng.lat);
    this.longitude.set(latlng.lng);

    // Appel du service pour obtenir l'adresse
    this.address = await this.geoService.reverseGeocode(latlng);
  }

}
