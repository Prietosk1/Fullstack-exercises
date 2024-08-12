/* eslint-disable react/prop-types */
const Course = ({ name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Header = (props) => {
  return <h2>{props.name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, actualValue) => sum + actualValue.exercises,
    0
  );
  return <strong>Total of {totalExercises} exercises</strong>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Course;
