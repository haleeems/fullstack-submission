import React from 'react'
import weather from '../services/weather'
import { useState } from 'react'
import { useEffect } from 'react'

const Weather = ({capital, latitude, longitude}) => {

  const [currWeather, setCurrWeather] = useState(null)

  useEffect(() => {
    if (latitude && longitude) {
      weather.getWeather({latitude, longitude}).then((res) => {
        setCurrWeather(res.current)
      }).catch((error) => {
        console.log(error)
      })
    }

  }, [latitude, longitude])

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {currWeather === null ? (
        <p>loading...</p>) :
        (
          <>
          <p>Temperature {currWeather.temperature_2m} Celsius</p>
          <p>Wind {currWeather.wind_speed_10m} m/s</p>
          </>
        )
      }
    </div>
  )
}

export default Weather