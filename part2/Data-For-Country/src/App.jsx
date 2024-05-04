import { useEffect, useState } from "react";
import Country from "./Country";
import { getAllCountries } from "./services/Country-Service";

const App = () => {
  const [specificCountry, setSpecificCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);
  // console.log(showCountry);
  // console.log(filteredCountries);

  const handleChange = (e) => {
    const search = e.target.value;
    const filtered = countries.filter((country) =>
      country?.name?.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(filtered);
  };
  const handleShow = (country) => {
    setShowCountry(true);
    setSpecificCountry(country);
  };
  // console.log(specificCountry);

  return (
    <div>
      <button onClick={()=>setShowCountry(false)}>clear</button>
      <span>
        Find countries{" "}
        <input
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </span>
      <div>
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : showCountry ? (
          <Country  country={specificCountry}/>
        ) : (
          filteredCountries.map((country) => (
            <div key={country?.name?.common}>
              {country?.name?.common}{" "}
              <button onClick={() => handleShow(country)}>
                Show
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default App;
