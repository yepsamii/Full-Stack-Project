import Part from "./Part";

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
export default Content;
