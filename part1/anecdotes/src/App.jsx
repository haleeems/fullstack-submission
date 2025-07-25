import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [highest, setHighest] = useState(0);
  const [index, setIndex] = useState(0);

  const randomNumGen = () => {
    setSelected(randomInt(0, 7));
    // mostVotes(vote);
  }

  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVotes(copy);
    mostVotes(copy);
  }
  
  const mostVotes = (voteArr) => {
    console.log(voteArr);
    const noVotes = Math.max(...voteArr);
    const indexVote= voteArr.indexOf(noVotes)
    setHighest(noVotes);
    setIndex(indexVote);
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <div>{vote[selected]} votes</div>
    <button onClick={randomNumGen}>Next Anecdote</button>
    <button onClick={handleVote}>Vote</button>

    <h1>Anecdote with most votes</h1>
    <div>{anecdotes[index]} {highest} votes</div>
    </>
  )
}

export default App