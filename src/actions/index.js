import axios from 'axios';

const API_KEY = 'c4f59206c29c4b70676d226a52ab0546';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);
    console.log('Request',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}