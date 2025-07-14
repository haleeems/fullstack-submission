import React from 'react'

const Total = (props) => {
  console.log(props.parts)
  // let sum = 0;
  // props.parts.forEach(element => {
  //   sum += element.exercises
  // });

  const sum = props.parts.reduce((total, part) => total + part.exercises, 0)
  console.log('sum: ' + sum)

  return (
    <>
      <p>Number of exercise {sum}</p>
    </>
  )
}

export default Total