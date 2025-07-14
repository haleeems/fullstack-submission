import React from 'react'

const Button = ({good, neutral, bad, all, setGood, setNeutral, setBad, setAll}) => {

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  return (
    <div>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
    </div>
  )
}

export default Button