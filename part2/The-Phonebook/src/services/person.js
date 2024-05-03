import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  return await axios.get(baseUrl).then((res) => {
    return res.data;
  });
};

const createPerson = async (newPerson) => {
  return await axios.post(baseUrl, newPerson);
};

const updatePerson = async (id, newPerson) => {
  return await axios.put(`${baseUrl}/${id}`, newPerson);
};

const deletePerson = async(id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, createPerson, updatePerson, deletePerson };
