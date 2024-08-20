/* eslint-disable react/prop-types */
const SearchBar = ({ country, handleCountryChange }) => {
  return (
    <p>
      Find countries <input value={country} onChange={handleCountryChange} />
    </p>
  );
};

export default SearchBar;
