import axios from 'axios';
const API_KEY ='034fb75b03b863aba6cbf1b5d02987f7';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${BASE_URL}&q=${city},GB`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}