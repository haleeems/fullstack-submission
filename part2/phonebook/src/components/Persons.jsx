import React from 'react'

const Persons = ({filterShow, remove}) => {
  return (
    <div>
      {filterShow.map(person => 
      <p 
      key={person.id || person.name}> 
        {person.name} {person.number}
      <button 
        type='submit' 
        onClick={() => remove(person.id, person.name)}
        style={{ marginLeft: '0.5rem' }}
      >
          Delete
      </button>
      </p>)}
    </div>
  )
}

export default Persons