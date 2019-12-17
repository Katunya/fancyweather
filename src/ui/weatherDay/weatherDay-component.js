/* eslint-disable import/no-cycle */
import Component from '../component';
import { getState } from '../../store/state/state';
import translate from "../../utils/translate";
import { celsiusToFaringate, addZero } from '../../utils/utils';

export default class WeatherDay extends Component {
    constructor(className) {
        super(className);
        this.timerID = setInterval(() => this.getCurrentDateTime(), 100000);
        this.currentDateTime = '';
        this.getCurrentDateTime();
    }

    getCurrentDateTime() {
        const { controlPanel, weather } = getState();
        const date = new Date();
        date.setUTCSeconds(date.getUTCSeconds() + weather.timezone);
        const dayName = translate(controlPanel.lang, 'shortDayName', date.getUTCDay());
        const day = date.getUTCDate();
        const month = translate(controlPanel.lang, 'fullMonthName', date.getUTCMonth());
        const hour = addZero(date.getUTCHours());
        const min = addZero(date.getUTCMinutes());
        this.currentDateTime = `${dayName} ${day} ${month}  ${hour}:${min}`;
        this.render();
    }


    render() {
        const { weather, city } = getState().weather;
        const { lang, isCelsius } = getState().controlPanel;
        if (city) {
            const temp = isCelsius ? weather.temp : celsiusToFaringate(weather.temp);
            const feels = isCelsius ? weather.feels : celsiusToFaringate(weather.feels);
            const html = `
      <div class="weather-day__city">${city.name}, ${city.country}</div>
      <div class="weather-day__date-time">${this.currentDateTime}</div>
      <div class="weather-day__wrapper">
        <div class="weather-day__temp">
          <div class="weather-day__temp-value">${temp}</div>
          <div class="weather-day__temp-deg">&deg;</div>
        </div>
        <div class="weather-day__img">
          <img src="./images/${weather.icon}.png" alt=""></img>
        </div>
        <ul class="weather-day__more">
          <li class="weather-day__more-item">${translate(lang, 'weather', weather.id)}</li>
          <li class="weather-day__more-item">${translate(lang, 'words', 'feels')}: ${feels} &deg;</li>
          <li class="weather-day__more-item">${translate(lang, 'words', 'wind')}: ${weather.wind.speed} m/c</li>
          <li class="weather-day__more-item">${translate(lang, 'words', 'humidity')}: ${weather.humidity} %</li>
        </ul>
      </div>
    `;
            super.render(html);
        }
    }
}
