import React from 'react'

const Part = (props) => {
  // console.log(props.part)
  console.log(props)
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

export default Part