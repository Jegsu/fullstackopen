import React, { useEffect, useState } from 'react'
import AddForm from './components/AddForm'
import Header from './components/Header'
import List from './components/List'
import Notification from './components/Notification'
import Search from './components/Search'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  const showPersons = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    const person = persons.find(person => person.name.toLowerCase().includes(newName.toLowerCase()))

    if (!person) {
      personService
        .create(personObject)
        .then(response => {
          setNotification({ success: `${newName} was added to the server` })
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    } else {
      if (window.confirm(newName + ' is already added to phonebook, replace the old number with the new one?')) {
        const id = person.id
        personService.update(id, personObject).then(response => {
          setNotification({ success: `Updated ${person.name}!`})
          setPersons(persons.map(person => person.id !== id ? person : response))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        }).catch(() => {
          setNotification({ error: `${person.name} was already removed from server` })
          setPersons(persons.filter(person => person.id !== id))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      } else {
        console.log("cancel update")
      }
    }
  }

  const deletePerson = (id) => {
    if (window.confirm("Do you really want to delete")) {
      personService
        .deletePerson(id)
        .then(() => {
          setNotification({ success: `Removed user from the server` })
          setPersons(persons.filter(person => person.id !== id))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        }).catch(() => {
          setNotification({ error: `User was already removed from server` })
          setPersons(persons.filter(person => person.id !== id))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    } else {
      console.log("cancel delete")
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  return (
    <div>
      <Notification message={notification} />
      <Header title={"Phonebook"} />
      <Search search={search} handleSearch={handleSearch} />
      <Header title={"Add new"} />
      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Header title={"Numbers"} />
      {persons ?
        <List showPersons={showPersons} deletePerson={deletePerson} />
        : <p>Loading...</p>}
    </div>
  )

}

export default App