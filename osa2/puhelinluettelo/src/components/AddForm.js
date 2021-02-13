import React from 'react'

const AddForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => (
    <form onSubmit={addPerson}>
    <div>Name: <input value={newName} onChange={handleNameChange} /></div>
    <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
    <div><button>Add</button></div>
  </form>
)

export default AddForm