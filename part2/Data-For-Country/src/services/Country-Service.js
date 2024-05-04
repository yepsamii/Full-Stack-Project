import axios from "axios";

export const getAllCountries = async () => {
  return await axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then((res) => {
      return res.data;
    });
};

export const getCountry = async (name) => {
  return await axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    .then((res) => {
        console.log('res.data', res.data);
      return res.data;
    });
}

