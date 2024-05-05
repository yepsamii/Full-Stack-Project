import { useEffect, useState } from "react";
import { getWeather } from "./services/Country-Service";

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    getWeather(country?.capital[0]).then((res) => {
      return setWeather(res);
    });
  }, [country]);
  // console.log(weather);
  return (
    <div>
      <h1>{country?.name?.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country?.area}</p>
      <div>
        <h4>languages:</h4>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img
          src={country?.flags?.png}
          alt={country?.flags?.alt}
        />
      </div>
      <div>
        <h2>Weather in {weather?.name}</h2>
        <p>
          <strong>temperature:</strong> {weather?.main?.temp} Celsius
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt={weather?.weather[0]?.description}
        />
        <p>
          <strong>wind:</strong> {weather?.wind?.speed} mph direction
        </p>
      </div>
    </div>
  );
};

export default Country;
