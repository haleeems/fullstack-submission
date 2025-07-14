import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        good={good} neutral={neutral} bad={bad} all={all} 
        setGood={setGood} setNeutral={setNeutral} setBad={setBad} setAll={setAll}
      />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />      
    </div>
  )
}

export default App