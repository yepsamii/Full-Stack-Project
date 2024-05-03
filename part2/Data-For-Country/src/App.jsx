import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
  const getAll = async () => {
    return await axios.get(url).then((res) => {
      return res.data;
    });
  };
  const getCountry = async (name) => {
    return await axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${name.toLowerCase()}`
      )
      .then((res) => {
        return res.data;
      });
  };
  useEffect(() => {
    getAll().then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    if (search) {
      getCountry(countries[0].name.common).then((data) => {
        setCountry(data);
      });
    }
  }, [countries, search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filtered = countries.filter((country) => {
      return country.name.official.toLowerCase().includes(search.toLowerCase());
    });
    setCountries(filtered);
  };
  return (
    <div>
      <p>
        Find Countries{" "}
        <input
          type="text"
          onChange={handleChange}
        />
      </p>
      {countries.length === 1 ? (
        <Country country={country} />
      ) : countries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        countries.map((country) => (
          <div key={country.name.common}>
            {country.name.official}
            <button onClick={() => setShow(true)}>show</button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
