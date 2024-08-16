import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const isRepeated = persons.some((object) => object.name === newName);
    if (isRepeated) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personService.createPerson(newPerson).then((returnedPerson) => {
        console.log(returnedPerson);
        setPersons(persons.concat(returnedPerson));
        setNewNumber("");
      });
    }
    setNewName("");
  };

  const deletePerson = (id) => {
    personService.deletePerson(id).then((deletedPerson) => {
      console.log(deletedPerson);
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const getPersons = () => {
    console.log("Efecto");
    personService.getAllPersons().then((initialPersons) => {
      console.log(initialPersons);
      setPersons(initialPersons);
    });
  };

  useEffect(getPersons, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons deletePerson={deletePerson} persons={persons} search={search} />
    </div>
  );
};

export default App;
