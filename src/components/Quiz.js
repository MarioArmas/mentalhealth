import React, { useEffect, useState } from 'react';
import data from  './data.json';

export default function Quiz() {
  const questions = data.questions

  // Array de objetos que contiene las preguntas y sus respuestas
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [objetoRecuperado, setObjetoRecuperado] = useState({ usuarios: []})

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    setObjetoRecuperado(JSON.parse(localStorage.getItem('datos de usuarios')))
  },[])

  useEffect(() => {
    const objeto = { usuarios: [
      ...objetoRecuperado.usuarios,
      { resultado: score }
    ] };
    localStorage.setItem('datos de usuarios', JSON.stringify(objeto));
  },[showScore])
  
  return (
    <div className='quiz border border-black'>
      {showScore ? (
        <div className='score-section'>
          Puntaje: {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section flex-column items-center justify-center'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className='answer-button' key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};