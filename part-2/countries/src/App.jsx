import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import countriesService from "./services/countriesList";
import CountriesList from "./components/CountriesList";

function App() {
  const [country, setCountry] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [error, setError] = useState(false);
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const getCountries = () => {
    console.log("Getting countries...");
    countriesService
      .getAllCountries()
      .then((countries) => setCountriesList(countries))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(getCountries, []);

  return (
    <>
      <h1>Countries</h1>
      <SearchBar country={country} handleCountryChange={handleCountryChange} />
      {countriesList.length === 0 ? (
        <p>
          {error
            ? "Unexpected error loading the countries, please try again."
            : "Loading countries..."}
        </p>
      ) : (
        <>
          {country === "" ? (
            <p>Search for a country!</p>
          ) : (
            <CountriesList search={country} countries={countriesList} />
          )}
        </>
      )}
    </>
  );
}

export default App;
