import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad, all}) => {

  if (good || neutral || bad !== 0) {
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good + bad * -1) / all} />
        <StatisticLine text="positive" value={((good/all) * 100) + "%"} />
        </tbody>

      </table>
    )
  } else {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

}

export default Statistics