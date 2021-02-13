import React from 'react'

const List = ({ showPersons, deletePerson }) => (
    <ul>
    {showPersons.map(person =>
      <li key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>Delete</button></li>
    )}
  </ul>
)

export default List