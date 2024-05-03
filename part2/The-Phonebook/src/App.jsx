import { useEffect, useState } from "react";
import phoneServices from "./services/person";
import PersonForm from "./Phone/Person-Form";
import Person from "./Phone/Person";
import FilterSearch from "./Phone/Filter-Search";
import Notification from "./Phone/Notification";

const App = () => {
  const [add,setAdd] = useState(false)
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const[error,setError] = useState('error')

  useEffect(() => {
    phoneServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, [add]);

  const addName = (event) => {
    event.preventDefault();
    setAdd(!add)
    if (persons.find((person) => person.name === newName && person.number === newNumber)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (
      persons.find(
        (person) => person.name === newName && person.number !== newNumber
      )
    ) {
      const person = persons.find((person) => person.name === newName);
      const updatedPerson = { ...person, number: newNumber };
      const id = person.id;
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phoneServices.updatePerson(id, updatedPerson).then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson
            )
          );
          setNewName("");
          setNewNumber("");
        });
      }
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    };
    phoneServices.createPerson(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      setError(`Added ${newName}`);
    });
  };
  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      phoneServices.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };
  const filteredPersons = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={error} />
      <FilterSearch
        search={search}
        setSearch={setSearch}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, i) => (
          <li key={i}>
            <Person
              person={person}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
