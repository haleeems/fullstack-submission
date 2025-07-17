import React from 'react'

const Total = ({total}) => {
 return (
    <b>
      total of {total.reduce((s, p) => 
        s + p.exercises, 0)} exercises
    </b>
  )
}

export default Total