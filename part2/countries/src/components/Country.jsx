import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
           <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather capital={country.capital} latitude={country.latlng[0]} longitude={country.latlng[1]} />
    </div>
  )
}

export default Country