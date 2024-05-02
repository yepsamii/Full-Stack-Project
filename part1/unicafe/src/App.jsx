import { useState } from "react";
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (value, setValue) => () => setValue(value + 1);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={handleClick(good, setGood)}
        text="good"
      />
      <Button
        onClick={handleClick(neutral, setNeutral)}
        text="neutral"
      />
      <Button
        onClick={handleClick(bad, setBad)}
        text="bad"
      />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default App;
