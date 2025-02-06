import { Injectable } from '@angular/core';
import { LatLng } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {

  constructor() { }

  // Méthode pour rechercher l'adresse à partir de coordonnées
  reverseGeocode(latLng: LatLng): Promise<string> {
    const lat = latLng.lat;
    const lng = latLng.lng;

    // URL de l'API de géocodage inversé
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'adresse');
        }
        return response.json();
      })
      .then(data => {
        
        if (data.features && data.features.length > 0) {
          return data.features[0].properties.label; // Retourne l'adresse
        } else {
          throw new Error('Aucune adresse trouvée pour ces coordonnées');
        }
      })
      .catch(error => {
        console.error('Erreur API:', error);
        return 'Adresse introuvable';
      });
  }
}
