import { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    const getData = await fetch("https://opentdb.com/api.php?amount=1")
    const data = await getData.json()
    await setQuestion(data.results[0].question)
  }

  return (
    <div className="App">
      <h1>Press the button to get a random question!</h1>
      <p>{question}</p>
      <button onClick={getQuestion}>Get a question</button>
    </div>
  );
}

export default App;
