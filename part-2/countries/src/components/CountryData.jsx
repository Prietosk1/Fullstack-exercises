/* eslint-disable react/prop-types */

import { useEffect } from "react";
import BasicInfo from "./BasicInfo";
import Flag from "./Flag";
import Languages from "./Languages";
import weatherService from "../services/countryWeather";
import { useState } from "react";
import WeatherReport from "./WeatherReport";

const CountryData = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  const { capital, area, languages, latlng } = country;
  const name = country.name.common;
  const flag = country.flags.png;
  const languageArray = Object.values(languages);
  const getWeather = () => {
    weatherService
      .getCountryWeather(latlng[0], latlng[1])
      .then((countryWeather) => {
        console.log(countryWeather.name);
        const { main, weather, wind } = countryWeather;
        const temperature = `${(main.temp - 273.15).toFixed(2)} Celcius`;
        const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        const windSpeed = `${wind.speed} m/s`;
        setCountryWeather({
          temperature,
          icon,
          windSpeed,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(getWeather, [latlng]);
  return (
    <div>
      <BasicInfo name={name} capital={capital} area={area} />
      <Languages languages={languageArray} />
      <Flag flag={flag} />
      {countryWeather && (
        <WeatherReport countryWeather={countryWeather} name={name} />
      )}
    </div>
  );
};

export default CountryData;
