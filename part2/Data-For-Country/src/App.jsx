import { useEffect, useState } from "react";
import Country from "./Country";
import { getAllCountries } from "./services/Country-Service";

const App = () => {
  // const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAllCountries().then((data) => {
      console.log(data);
    });
  }, []);
  // console.log(countries);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <span>
        Find countries{" "}
        <input
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </span>
      <div></div>
      <Country />
    </div>
  );
};
export default App;
