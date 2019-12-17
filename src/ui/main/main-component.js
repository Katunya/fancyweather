/* eslint-disable import/no-cycle */
import Component from '../component';
import WeatherDay from '../weatherDay/index';
import WeatherForecast from '../weatherForecast/index';
import Geoposition from '../geoposition/index';

export default class Main extends Component {
    render() {
        const html = `
      <div class="weather">
        <div class="weather-day"></div>
        <div class="weather-forecast"></div>
      </div>
      <div class="geoposition"></div>`;
        super.render(html);
        WeatherDay('.weather-day');
        WeatherForecast('.weather-forecast');
        Geoposition('.geoposition');
    }
}
