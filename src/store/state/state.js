/* eslint-disable import/no-cycle */
import reducer from '../reducers/reducer';
import Page from '../../ui/page/index';

let state = {
  controlPanel: {
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
    isCelsius: localStorage.getItem('isCelsius') ? localStorage.getItem('isCelsius') : 'true',
    searchString: '',
  },
  weather: '',
  forecast: '',
};

export const dispatch = (action) => {
  state = reducer(state, action);
  Page('#root');
};

export const getState = () => state;
