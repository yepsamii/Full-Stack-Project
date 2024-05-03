const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <span>capital {country.capital[0]}</span>
      </p>
    </div>
  );
};

export default Country;
