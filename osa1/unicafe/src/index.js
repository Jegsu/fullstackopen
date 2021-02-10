import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => (
  <h1>{title}</h1>
)

const Button = ({ onClick, name }) => (
  <button onClick={onClick}>{name}</button>
)

const Statistic = ({ name, count }) => (
  <tr>
    <td>{name}</td>
    <td>{count}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, total, sum }) => (
  <table>
    <tbody>
      <Statistic name={"good"} count={good} />
      <Statistic name={"neutral"} count={neutral} />
      <Statistic name={"bad"} count={bad} />
      <Statistic name={"all"} count={total} />
      <Statistic name={"average"} count={(sum / total).toFixed(1)} />
      <Statistic name={"positive"} count={((good / total) * 100).toFixed(1) + "%"} />
    </tbody>
  </table>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(null)
  const [sum, setSum] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setSum(sum + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setSum(sum - 1)
  }

  return (
    <div>
      <Header title={"give feedback"} />
      <Button onClick={goodClick} name={"good"} />
      <Button onClick={neutralClick} name={"neutral"} />
      <Button onClick={badClick} name={"bad"} />
      <Header title={"statistics"} />
      {total ?
        <Statistics good={good} neutral={neutral} bad={bad} total={total} sum={sum} />
        : <p>No feedback given</p>}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)