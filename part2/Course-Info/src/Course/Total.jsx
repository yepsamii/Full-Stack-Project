const Total = ({ parts }) => {
  return (
    <strong>
      total of {parts.map((part) => part.exercises).reduce((s, p) => s + p, 0)}{" "}
      exercises
    </strong>
  );
};
export default Total;
