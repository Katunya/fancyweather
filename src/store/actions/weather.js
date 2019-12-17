/* eslint-disable import/no-cycle */
import { dispatch } from '../state/state';
import { getWeatherForecast } from './forecast';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

const PATH_BASE = 'https://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const API_KEY = 'APPID=d5ecba2b149b9cdfb1fea656c735177d';
const UNITS = 'units=metric';
const PATH_SEARCH = 'q=';

export const getWeatherRequest = (bool) => ({
  type: GET_WEATHER_REQUEST,
  payload: bool,
});

export const getWeatherSuccess = (item) => ({
  type: GET_WEATHER_SUCCESS,
  payload: item,
});

export const getWeatherError = (bool) => ({
  type: GET_WEATHER_ERROR,
  payload: bool,
});

export const getWeatherByCity = (city) => {
  dispatch(getWeatherRequest(true));
  fetch(`${PATH_BASE}${WEATHER}?${API_KEY}&${UNITS}&${PATH_SEARCH}${city}`)
      .then((response) => {
        if (!response.ok) {
          dispatch(getWeatherRequest(false));
          throw Error(response.statusText);
        }
        dispatch(getWeatherRequest(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => {
        // dispatch(getWeatherForBackground(item.weather[0].main));
        dispatch(getWeatherError(false));
        // eslint-disable-next-line no-use-before-define
        dispatch(getWeatherSuccess(preapreWeather(item)));
        getWeatherForecast(item.id);
      })
      .catch(() => dispatch(getWeatherError(true)));
};


function preapreWeather(item) {
  const result = {
    id: item.id,
    date: item.dt,
    timezone: item.timezone,
    city: {
      name: item.name,
      country: item.sys.country,
      coord: {
        lat: item.coord.lat,
        lon: item.coord.lon,
      },
    },
    weather: {
      id: item.weather[0].id,
      temp: Math.round(item.main.temp),
      feels: Math.round(13.12 + 0.6215
          * Math.round(item.main.temp) - 11.37 * (item.wind.speed ** 0.16) + 0.3965
          * Math.round(item.main.temp) * (item.wind.speed ** 0.16)),
      humidity: item.main.humidity,
      icon: item.weather[0].icon,
      wind: {
        deg: item.wind.deg,
        speed: item.wind.speed,
      },
    },
  };
  return result;
}
