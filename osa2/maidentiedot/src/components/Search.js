import React from 'react'

const Search = ({ search, handleSearch }) => (
    <div>Find countries: <input value={search} onChange={handleSearch} /></div>
)

export default Search