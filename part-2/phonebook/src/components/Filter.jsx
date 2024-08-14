/* eslint-disable react/prop-types */
const Filter = ({ search, handleSearch }) => {
  return (
    <p>
      Filter shown with <input value={search} onChange={handleSearch} />
    </p>
  );
};

export default Filter;
