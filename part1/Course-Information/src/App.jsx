const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  // console.log(parts);
  return (
    <div>
      {parts.map((part, index) => {
        return (
          <Part
            key={index}
            part={part}
          />
        );
      })}
    </div>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.map((part) => part.exercises).reduce((a, b) => a + b, 0)}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
