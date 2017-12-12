import Axios from "axios";

const OPEN_WEATHER_API_KEY = "not here Kappa";
const API_CALL_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => {
  const url = `${API_CALL_URL}&q=${city},fr`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
