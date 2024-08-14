import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "300-000-000" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePerson = (person) => {
    const name = person.name.toLowerCase();
    const newSearch = search.toLowerCase();
    const isIncluded = name.includes(newSearch);
    if (search === "" || isIncluded) {
      return (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      );
    }
  };

  console.log(search);

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        Filter shown with <input value={search} onChange={handleSearch} />
      </p>
      <h2>Add a new</h2>
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
      {persons.map((person) => handlePerson(person))}
    </div>
  );
}

export default App;
