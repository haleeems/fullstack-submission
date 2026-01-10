import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    phonebook.getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

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
      if (confirm(`${personObject.name} is already added to phonebook, replace old number with a new one?`)) {
        const foundPerson = persons.find(person => person.name === personObject.name)
        phonebook.update(foundPerson.id, personObject)
        .then(res => {
          const newList = persons.map(person => person.id === res.id ? res : person)
          setPersons(newList)
        })
      } else return
    } else if (personObject.name === '' || personObject.number === '') {
      return alert('Must fill out entire contents of form')
    }
    else {
      phonebook
      .create(personObject)
      .then(res => {
        // console.log(response.data)
        // console.log(personObject)
        setPersons(persons.concat(res));
        setNewName('')
        setNewNumber('')
      })
    }
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

  const remove = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      phonebook.remove(id)
      .then(() => {
        const newList = persons.filter((person) => person.id !== id)
        console.log('new list:')
        console.log(newList)
        setPersons(newList)
      })
    } else return;

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
      <Persons filterShow={filterShow} remove={remove}/>
    </div>
  )
}

export default App