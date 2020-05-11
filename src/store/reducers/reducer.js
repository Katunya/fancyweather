/* eslint-disable import/no-cycle */
import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  CHANGE_SEARCH_STRING,
} from '../actions/controlPanel';

import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from '../actions/weather';

import {
  GET_WEATHER_FORECAST_REQUEST,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
} from '../actions/forecast';

export default function (state, action) {
  switch (action.type) {
    /* controlPanel */
    case CHANGE_LANG: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          lang: action.payload,
        },
      };
    }
    case CHANGE_USE_CELSIUS: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          isCelsius: action.payload,
        },
      };
    }
    case CHANGE_SEARCH_STRING: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          searchString: action.payload,
        },
      };
    }
    /* weather */
    case GET_WEATHER_REQUEST: {
      return {
        ...state,
        isWeatherRequest: action.payload,
      };
    }
    case GET_WEATHER_ERROR: {
      return {
        ...state,
        isWeatherError: action.payload,
      };
    }
    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    /* forecast */
    case GET_WEATHER_FORECAST_REQUEST: {
      return {
        ...state,
        isForecastRequest: action.payload,
      };
    }
    case GET_WEATHER_FORECAST_ERROR: {
      return {
        ...state,
        isForecastError: action.payload,
      };
    }
    case GET_WEATHER_FORECAST_SUCCESS: {
      return {
        ...state,
        forecast: action.payload,
      };
    }
    default:
  }
  return state;
}
