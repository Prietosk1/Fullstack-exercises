/* eslint-disable react/prop-types */
const Person = ({ name, number, id, deletePerson }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${name}" ?`)) {
      deletePerson(id);
    }
  };
  return (
    <div>
      <p>
        {name} {number} <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default Person;
