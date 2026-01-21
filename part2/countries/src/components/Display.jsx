import React from 'react'
import Country from './Country'

const Display = ({filteredCountries, selectedCountry, setSelectedCountry}) => {

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } 

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />
  }  

  if (selectedCountry) {
    return <Country country={selectedCountry}/>
  }
  
  {
    return (
      <div>
        {filteredCountries.map((country) => (
          <div key={country.cca2}>
            <p>
              {country.name.common} <button onClick={() => {
                setSelectedCountry(country)}} country={country}>Show</button>
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default Display