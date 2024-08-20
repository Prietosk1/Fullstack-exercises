import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error();
    });
};

export default {
  getAllCountries,
};
