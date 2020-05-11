// eslint-disable-next-line import/no-cycle
import WeatherDay from "./weatherDay-component";

export default (className) => {
    const weatherDay = new WeatherDay(className);
    weatherDay.render();
};
