import { useState } from "react"
import Filter from "./components/Filter"
import countries from "./services/countries"
import { useEffect } from "react"
import Display from "./components/Display"

const App = () => {

  const [filter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countries.getAllCountries()
    .then((res) => {
      setAllCountries(res)
    })
  }, [])

  const filterChange = (event) =>{
    const value = event.target.value
    setFilter(value)

    const list = allCountries.filter(country => 
      country.name.common.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCountries(list)
    setSelectedCountry(null)
  }


  return (
    <div>
      <Filter filter={filter} filterChange={filterChange}/>
      <Display filteredCountries={filteredCountries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
    </div>
  )
}

export default App