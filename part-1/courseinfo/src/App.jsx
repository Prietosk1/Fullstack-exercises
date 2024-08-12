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
  return <h1>{props.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
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

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course name={course.name} parts={course.parts} />
    </div>
  );
};

export default App;
