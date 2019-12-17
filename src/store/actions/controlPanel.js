export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_USE_CELSIUS = 'CHANGE_USE_CELSIUS';
export const CHANGE_SEARCH_STRING = 'CHANGE_SEARCH_STRING';

export const changeLang = (lang = 'en') => ({
  type: CHANGE_LANG,
  payload: lang,
});

export const changeUseCelsius = (isCelsius = true) => ({
  type: CHANGE_USE_CELSIUS,
  payload: isCelsius,
});

export const changeSearchString = (searchString = '') => ({
  type: CHANGE_SEARCH_STRING,
  payload: searchString,
});
