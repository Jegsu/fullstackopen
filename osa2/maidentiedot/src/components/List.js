import React from 'react'
import Detail from './Detail'

const List = ({ results, setSearch }) => {

  if (results.length === 1) {
    return (
      <Detail result={results[0]} />
    )
  } else if (results.length <= 10) {
    return (
      results.map((result, i) =>
        <p key={i}>{result.name} <button onClick={() => setSearch(result.name)}>Show</button></p>
      )
    )
  } else {
    return (
      <p>Too many results</p>
    )
  }
}

export default List