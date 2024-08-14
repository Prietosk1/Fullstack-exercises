import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "300-000-000" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const isRepeated = persons.some((object) => object.name === newName);
    if (isRepeated) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewNumber("");
    }
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log("Name", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={handleNumberChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
}

export default App;
