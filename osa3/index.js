require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./model/person')

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.use(morgan(':method :url :status :body'))

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

app.get('/info', (request, response) => {
  Person.find({}).then(res => {
    response.send(`<p>Phonebook has info for ${res.length} people</p><p>${new Date()}</p>`)
  })
})

app.get('/api/persons', (request, response) => {
  try {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  } catch (error) {
    console.log('get error', error)
  }
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(persons => {
    if (persons) {
      response.json(persons)
    } else {
      response.status(404).end()
    }
  }).catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(res => {
      response.json(res)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(res => {
    response.json(res)
  })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted ID' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})