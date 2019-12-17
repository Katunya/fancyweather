/* eslint-disable import/no-cycle */
import Component from '../component';
import { getState } from '../../store/state/state';
import translate from "../../utils/translate";
import { celsiusToFaringate } from '../../utils/utils';

export default class WeatherForecast extends Component {
    render() {
        const { lang, isCelsius } = getState().controlPanel;
        const { forecast } = getState();
        let html = '';

        if (forecast !== '') {
            forecast.forEach((forecastDay) => {
                const temp = isCelsius ? forecastDay.temp : celsiusToFaringate(forecastDay.temp);
                html += `<div class="weather-forecast__day">
        <div class="weather-forecast__weekday">${translate(lang, 'fullDayName', forecastDay.weekDay)}</div>
        <div class="weather-forecast__temp">${temp}&deg;</div>
        <div class="weather-forecast__img">
          <img src="./images/${forecastDay.icon}.png" alt="">
        </div>
      </div>`;
            });
        }
        super.render(html);
    }
}
