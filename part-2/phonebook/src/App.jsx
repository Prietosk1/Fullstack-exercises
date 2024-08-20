import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState({
    showNotification: false,
    message: "",
    isError: "",
  });

  const addPerson = (event) => {
    event.preventDefault();
    const fixedName = newName.trim();
    const newPerson = {
      name: fixedName,
      number: newNumber,
    };
    const isRepeated = persons.some((object) => object.name === fixedName);
    if (isRepeated) {
      if (
        window.confirm(
          `${fixedName} is already added to the phonebook, replace the old number with this one?`
        )
      ) {
        updatePerson(newPerson);
      }
    } else {
      personService.createPerson(newPerson).then((returnedPerson) => {
        console.log(returnedPerson);
        setPersons(persons.concat(returnedPerson));
      });
      setNewNumber("");
      setNewName("");
      showNotification(`Added ${newPerson.name} !`);
    }
  };

  const deletePerson = (id) => {
    const { name } = persons.find((person) => person.id === id);
    personService.deletePerson(id).then((deletedPerson) => {
      console.log(deletedPerson);
      setPersons(persons.filter((person) => person.id !== id));
    });
    showNotification(`Deleted ${name} !`);
  };

  const updatePerson = (newPerson) => {
    const { id } = persons.find((person) => person.name === newPerson.name);
    personService
      .updatePerson(id, newPerson)
      .then((returnedPerson) => {
        console.log(returnedPerson);
        setPersons(
          persons.map((person) =>
            person.id === id ? { ...newPerson, id } : person
          )
        );

        showNotification(`Updated phone number of ${newPerson.name} !`);
      })
      .catch(() => {
        showNotification(
          `Information of ${newPerson.name} has already been removed from the server.`,
          true
        );
        setPersons(persons.filter((person) => person.id !== id));
      });
    setNewName("");
    setNewNumber("");
  };

  const showNotification = (message, isError = false) => {
    setNotification({
      showNotification: true,
      message: message,
      isError,
    });
    setTimeout(() => {
      setNotification({
        showNotification: false,
        message: "",
        isError: false,
      });
    }, 5000);
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
      {notification.showNotification && (
        <Notification
          isError={notification.isError}
          message={notification.message}
        />
      )}
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
