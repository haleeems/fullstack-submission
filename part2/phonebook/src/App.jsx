import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true);

  const nameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const addContact = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some(item => objCheck(personObject, item))) {
      return alert(`${newName} is already added to phonebook`);
    } else setPersons(persons.concat(personObject));
  }
  
  const objCheck = (obj1, obj2) => {
    if (obj1.name === obj2.name) return true;
  }
  
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const filterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    (value !== '') ? setShowAll(false) : setShowAll(true);
  }

  const filterShow = showAll 
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())); 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterChange={filterChange}/>
      <form>
        <h3>add a new</h3>
        <PersonForm 
          newName={newName} nameChange={nameChange} 
          newNumber={newNumber} numberChange={numberChange}
        />
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons filterShow={filterShow}/>
    </div>
  )
}

export default App