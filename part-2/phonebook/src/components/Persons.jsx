import Person from "./Person";

/* eslint-disable react/prop-types */
const Persons = ({ deletePerson, persons, search }) => {
  return (
    <>
      {persons.map((person) => {
        const name = person.name.toLowerCase();
        const newSearch = search.toLowerCase();
        const isIncluded = name.includes(newSearch);
        if (search === "" || isIncluded) {
          return (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
              id={person.id}
              deletePerson={deletePerson}
            />
          );
        }
      })}
    </>
  );
};

export default Persons;
