import React, {useState} from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleReview}>{props.text}</button>
  )
}

const Stats = (props) => {
  if(props.good + props.bad + props.neutral === 0)
  {
    return (
      <div>
        No feedback given yet
      </div>
    )
  }
  const stats_average = (props.good - props.bad)/(props.good + props.bad)
  const stats_positive = (props.good/(props.good+props.neutral+props.bad)) * 100
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Good review total </td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral review total </td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad review total </td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>Average: {stats_average}</td>
          </tr>
          <tr>
            <td>Positive: {stats_positive} % </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)


  return (
    <div>
      <h3>We would love to hear your Feedback</h3>
      <Button handleReview={handleGood} text="Good" />
      <Button handleReview={handleNeutral} text="Neutral"/>
      <Button handleReview={handleBad} text="Bad"/>
      <h4>Stats below </h4>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App
