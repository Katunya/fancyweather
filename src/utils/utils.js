export function celsiusToFaringate(temp) {
  return Math.round(temp * (9 / 5) + 32);
}

export function getTimesOfDay() {
  const hours = new Date().getHours();

  if (hours > 4 && hours < 8) { return 'sunrise'; }
  if (hours >= 8 && hours < 11) { return 'morning'; }
  if (hours >= 11 && hours < 13) { return 'noon'; }
  if (hours >= 13 && hours < 16) { return 'afternoon'; }
  if (hours >= 16 && hours < 22) { return 'evening'; }

  return 'night';
}

export function getCurrentSeason() {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) { return 'spring'; }
  if (month >= 5 && month <= 7) { return 'summer'; }
  if (month >= 8 && month <= 10) { return 'autumn'; }

  return 'winter';
}

export function addZero(n) {
  return n < 10 ? `0${n}` : n;
}
