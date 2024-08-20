import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;

const getCountryWeather = (latitude, longitude) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error();
    });
};

export default {
  getCountryWeather,
};
