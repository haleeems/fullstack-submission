import React from 'react'

const Persons = ({filterShow}) => {
  return (
    <div>
      {filterShow.map(person => <p key={person.id || person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons