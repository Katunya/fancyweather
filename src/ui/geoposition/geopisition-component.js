/* eslint-disable import/no-cycle */
import mapboxgl from 'mapbox-gl';
import Component from '../component';
import { getState } from '../../store/state/state';
import translate from "../../utils/translate";

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0dW55YSIsImEiOiJjazRhOGdvZzMwMWcyM2ZtbnlldXI3dmIyIn0.o6yCZMlxtYl0a2nE_m6rsg';

export default class Geoposition extends Component {
    mapCreate(lat, lon) {
        this.map = new mapboxgl.Map({
            container: 'map',
            center: [lon, lat],
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
        });
    }

    render() {
        if (getState().weather) {
            const { coord } = getState().weather.city;
            const { lang } = getState().controlPanel;
            const lat = (`${coord.lat}`).split('.');
            const lon = (`${coord.lon}`).split('.');

            const html = `
          <div class="mapContainer">
            <div id="map" class="map" style="position: relative; width: 100%; height: 100%;"></div>
          </div>
          <p>${translate(lang, 'words', 'lat')}: ${lat[0]}&deg;${lat[1]}'</p>
          <p>${translate(lang, 'words', 'lon')}: ${lon[0]}&deg;${lon[1]}'</p>`;
            super.render(html);
            this.mapCreate(coord.lat, coord.lon);
        }
    }
}
