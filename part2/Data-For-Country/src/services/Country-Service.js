import axios from 'axios';

export const getAllCountries = async () => {
  return await axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
    return res.data;
  })
};
