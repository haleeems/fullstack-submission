import React from 'react'

const PersonForm = ({newName, nameChange, newNumber, numberChange}) => {
  return (
    <div>
      <p>name: 
        <input value={newName} onChange={nameChange}/>
      </p>
      <p>number: 
        <input value={newNumber} onChange={numberChange}/>
      </p>
    </div>
  )
}

export default PersonForm