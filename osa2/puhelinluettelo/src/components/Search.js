import React from 'react'

const Search = ({ search, handleSearch }) => (
    <div>Search: <input value={search} onChange={handleSearch} /></div>
)

export default Search