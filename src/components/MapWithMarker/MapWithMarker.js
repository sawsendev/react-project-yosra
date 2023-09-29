import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithMarker = ({ coordinates }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
      console.error("Element with ID 'map' not found in the DOM.");
      return;
    }

    if (coordinates && coordinates.length > 0 && !mapContainer._leaflet_id) {
      const map = L.map(mapContainer).setView(coordinates[0], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      // Créez une icône personnalisée
      const customIcon = L.divIcon({
      className: 'custom-icon', // Classe CSS personnalisée
      html: '<div></div>', // Contenu HTML vide
      iconSize: [32, 32], // Taille de l'icône
      });

      coordinates.forEach((coord) => {
        // Ajouter un marqueur à chaque coordonnée
        L.marker(coord, { icon: customIcon }).addTo(map);
        
        // Ajouter un cercle noir autour de chaque marqueur
        L.circle(coord, {
          color: 'black',
          fillColor: 'black',
          fillOpacity: 0.5,
          radius: 250, // Rayon du cercle en mètres
        }).addTo(map);
      });
    }
  }, [coordinates]);

  return <div id="map" style={{ height: '765px' }}></div>;
};

export default MapWithMarker;
