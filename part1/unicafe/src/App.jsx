import { useState } from "react";

const Statistics = ({ stat }) => {
  const all = parseFloat(stat.good + stat.neutral + stat.bad);
  const average = (stat.good - stat.bad) / all;
  const positive = (stat.good / all) * 100;
  return (
    <>
      <h1>statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
            <StatisticLine
              text="good"
              value={stat.good}
            />
            <StatisticLine
              text="neutral"
              value={stat.neutral}
            />
            <StatisticLine
              text="bad"
              value={stat.bad}
            />
            <StatisticLine
              text="all"
              value={all}
            />
            <StatisticLine
              text="average"
              value={average}
            />
            <StatisticLine
              text="positive"
              value={positive}
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value}%</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [stat, setStat] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (value) => {
    if (value === "good") {
      const newGood = stat.good + 1;
      setStat({ ...stat, good: newGood });
    }
    if (value === "neutral") {
      const newNeutral = stat.neutral + 1;
      setStat({ ...stat, neutral: newNeutral });
    }
    if (value === "bad") {
      const newBad = stat.bad + 1;
      setStat({ ...stat, bad: newBad });
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick("good")}>good</button>
      <button onClick={() => handleClick("neutral")}>neutral</button>
      <button onClick={() => handleClick("bad")}>bad</button>
      <Statistics stat={stat} />
    </div>
  );
};

export default App;
