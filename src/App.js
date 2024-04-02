import React, { useState } from 'react';
import { QUESTIONS } from './questions';
import "./index.css"
const questions =Object.keys(QUESTIONS).map(key => QUESTIONS[parseInt(key)])

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [average, setaverage] = useState(null);
  const [score, setScore] = useState(null);

  const countAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const yesCount = answers.filter(answer => answer === 'Yes').length;
    return (yesCount / questions.length) * 100;
  };

  const calculateaverage = () => {
    if (answers.length === 0) return null;
    const totalScore = answers.reduce((acc, curr) => acc + (curr === 'Yes' ? 1 : 0), 0);
    return (totalScore / answers.length) * 100;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    const result = calculateaverage();
    setaverage(result);
    setScore(score)
  };

  return (
    <div className="ques">
      <h1>Quiz</h1>
      {questions?.length > 0 && questions?.map((question, index) => (
        <div  key={index}>
          <p>{index+1} : {question}</p>
          <button onClick={() => countAnswer(index, 'Yes')}>Yes</button>
          <button onClick={() => countAnswer(index, 'No')}>No</button>
        </div>
      ))}
      <br></br><button onClick={handleSubmit}>Submit</button>
      <h2> Average  : {average?.toFixed(2)}</h2>
      <h2> Score: {score?.toFixed(2)}</h2>
    </div>
  )
};

export default App;