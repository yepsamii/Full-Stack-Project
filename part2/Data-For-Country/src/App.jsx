import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
  const getAll = async () => {
    return await axios.get(url).then((res) => {
      return res.data;
    });
  };
  useEffect(() => {
    async () =>
      await axios.get(url).then((response) => {
        console.log(response);
      });
  }, []);
  // console.log(countries);
  return (
    <div>
      <p>
        Find Countries <input type="text" />
      </p>
      <div></div>
    </div>
  );
};

export default App;
