import axios from 'axios'
import { fetchWeatherApi } from "openmeteo";

const baseUrl = 'https://api.open-meteo.com/v1/forecast'


const getWeather = ({latitude, longitude}) => {
  
  const params = {
    latitude: latitude,
    longitude: longitude,
	  current: "temperature_2m,wind_speed_10m"
  }

  return axios.get(baseUrl, {params}).then((res) => res.data)
}

export default { getWeather }