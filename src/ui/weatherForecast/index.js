/* eslint-disable import/no-cycle */
import WeatherForecast from "./weatherForecast-component";

export default (className) => {
    const weatherForecast = new WeatherForecast(className);
    weatherForecast.render();
}
