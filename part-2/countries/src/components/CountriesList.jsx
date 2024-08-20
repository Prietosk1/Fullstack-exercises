import CountryData from "./CountryData";
import SingleCountry from "./SingleCountry";

/* eslint-disable react/prop-types */
const CountriesList = ({ countries, search }) => {
  const filteredCountries = countries.filter((country) => {
    const name = country.name.common;
    const lowerName = name.toLowerCase();
    return lowerName.includes(search.toLowerCase());
  });

  const countriesAmount = filteredCountries.length;

  return (
    <>
      {countriesAmount <= 10 && countriesAmount > 1 ? (
        <>
          {filteredCountries.map((country) => {
            const name = country.name.common;
            return <SingleCountry key={name} name={name} country={country} />;
          })}
        </>
      ) : countriesAmount === 1 ? (
        <CountryData country={filteredCountries[0]} />
      ) : countriesAmount > 10 ? (
        <p>Too many matches, specify another filter.</p>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default CountriesList;
