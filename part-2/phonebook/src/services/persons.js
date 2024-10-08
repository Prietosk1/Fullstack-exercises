import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const updatePerson = (id, newPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
    .then((response) => response.date)
    .catch((error) => {
      console.log(error);
      throw new Error();
    });
};

export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};
