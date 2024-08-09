import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);
  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  const voteAnecdote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);

    let mostPoints = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (newPoints[i] > newPoints[mostPoints]) {
        mostPoints = i;
      }
    }
    setMostVoted(mostPoints);
  };

  console.log(points);

  return (
    <>
      <h1>Anecdotes</h1>
      <div>
        <h2>Anecdote of the day</h2>
        <h3>{anecdotes[selected]}</h3>
        <p>Has {points[selected]} votes.</p>
        <button onClick={getRandomAnecdote}>Next anecdote</button>
        <button onClick={voteAnecdote}>Vote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <h3>{anecdotes[mostVoted]}</h3>
        <p>Has {points[mostVoted]} votes</p>
      </div>
    </>
  );
}

export default App;
