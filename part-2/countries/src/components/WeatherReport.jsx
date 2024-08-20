/* eslint-disable react/prop-types */

const WeatherReport = ({ countryWeather, name }) => {
  const { temperature, icon, windSpeed } = countryWeather;
  return (
    <div>
      <h3>Weather in {name}</h3>
      <p>Temperature: {temperature}</p>
      <img src={icon} />
      <p>Wind: {windSpeed}</p>
    </div>
  );
};

export default WeatherReport;
