import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './components/List'
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const results = search ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) : countries

  const handleSearch = (event) => {
      setSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <List results={results} setSearch={setSearch} />
    </div>
  )

}

export default App
