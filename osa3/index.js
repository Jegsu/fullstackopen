const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.static('build'));
app.use(express.json())
app.use(cors())

// "tiny" with :body
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (persons.find(person => person.name.toLowerCase().includes(body.name.toLowerCase()))) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    } else if (persons.find(person => person.number.toLowerCase().includes(body.number.toLowerCase()))) {
        return response.status(400).json({
            error: 'number must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: persons.length + 1,
    }
    persons = persons.concat(person)
    response.json(persons)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})