/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const FeedbackForm = ({ handleGood, handleNeutral, HandleBad }) => {
  return (
    <>
      <h2>Give feedback</h2>
      <Button text="Good" handleClick={handleGood} />
      <Button text="Neutral" handleClick={handleNeutral} />
      <Button text="Bad" handleClick={HandleBad} />
    </>
  );
};

const DisplayFeedback = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <FeedbackAmount {...props} />
      <TotalFeedback {...props} />
      <AverageFeedback {...props} />
      <PositiveFeedback {...props} />
    </>
  );
};

const FeedbackAmount = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>Good - {good}</li>
      <li>Neutral - {neutral}</li>
      <li>Bad - {bad}</li>
    </ul>
  );
};

const TotalFeedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return <p>Total: {total}</p>;
};

const AverageFeedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  return <p>Average: {average}</p>;
};

const PositiveFeedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const porcent = (good * 100) / total;
  return <p>Positive: {porcent} %</p>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>UNICAFE</h1>
      <FeedbackForm
        handleGood={() => setGood(good + 1)}
        handleNeutral={() => setNeutral(neutral + 1)}
        HandleBad={() => setBad(bad + 1)}
      />
      <DisplayFeedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
