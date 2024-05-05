import axios from "axios";
export const apiKey = import.meta.env.VITE_SOME_KEY;

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

export const getWeather = async (capital) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
    )
    .then((res) => {
      return res.data;
    });
}
