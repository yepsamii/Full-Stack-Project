const Country = ({country}) => {
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
        <img src={country?.flags?.png} alt={country?.flags?.alt} />
      </div>
      <div>
        <h2>Weather in {country?.capital[0]}</h2>
        <p>
          <strong>temperature:</strong> {country?.temperature} Celsius
        </p>
        <img src={country?.weather_icons} alt={country?.weather_descriptions} />
        <p>
          <strong>wind:</strong> {country?.wind_speed} mph direction{" "}
          {country?.wind_dir}
        </p>
      </div>
    </div>
  );
};

export default Country;
