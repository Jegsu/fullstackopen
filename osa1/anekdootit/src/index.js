import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => (
  <h1>{title}</h1>
)

const Button = ({ onClick, name }) => (
  <button onClick={onClick}>{name}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const handleNext = () => {
    const random = Math.floor(Math.random() * 6);
    setSelected(random)
  }

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy)
  }

  return (
    <div>
      <Header title={"Anecdote of the day"} />
      <p>{props.anecdotes[selected]}</p>
      <p>{"has " + points[selected] + " votes"}</p>
      <Button onClick={handleVote} name={"Vote"} />
      <Button onClick={handleNext} name={"Next Anecdote"} />

      <Header title={"Anecdote with the most votes"} />
      <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>{"has " + Math.max(...points) + " votes"}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)