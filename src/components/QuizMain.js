import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import logo from '../black.jpg'
import './font.css'
const axios = require('axios');

const QuizStyle = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@1000&display=swap');
    margin: 0;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    
  
  
  .app {
    background-color: #252d4a;
    width: 1536px;
    height: 664px;
    border-radius: 15px;  
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: space-evenly;
  }
  
  .score-section {
    display: flex;
    font-size: 24px;      
    align-items: center;
  }
  
  .question-section {
    width: 100%;
    position: relative;
  }
  
  .question-count {
    margin-bottom: 20px;
  }
  
  .question-count span {
    font-size: 28px;
  }
  
  .question-text {
    margin-bottom: 12px;
  }
  
  .timer-text {
    background: rgb(230, 153, 12);
    padding: 15px;
    margin-top: 20px;
    margin-right: 20px;
    border: 5px solid rgb(255, 189, 67);
    border-radius: 15px;
    text-align: center;
  }
  
  .answer-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  button {
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    background-color: #252d4a;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #234668;
    cursor: pointer;
  }
  
  .correct {
    background-color: #2f922f;
  }
  
  .incorrect {
    background-color: #ff3333;
  }
  .hyperlink{
    clolor : #
  }
  button:hover {
    background-color: #555e7d;
  }
  
  button:focus {
    outline: none;
  }
  
  button svg {
    margin-right: 5px;
  }
  .backgorund{
      width: 100%;
      height : 100%;
      background: background-url(${logo});
  }
`

const Quiz = () => {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  useEffect(()=>{

    var options = {
        url: 'https://quizapi.io/api/v1/questions?apiKey=75cT4RYq0oTykWSrMRykYSjmhhxxDc8Ykqf00r1S&limit=10'
    };

    function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
    }
  })

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerButtonClick = (isCorrect) => {
		const nextQuestion = currentQuestion + 1;
		if(isCorrect){
			setScore(score + 1);
		}
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);	
		}else{
			setShowScore(true)
		}
	};


	
	return (
    
    <QuizStyle>
    <div className='app'>
      {showScore ? (
        
          <div className='score-section'>
              최종점수 {score}/{questions.length}
          </div>
          
        
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div> 
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}

    </div> </QuizStyle>
    
     
    
	);
}


export default Quiz;

/*
<Particles className = "background"
      params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
      }}
    > 
        </Particles>
        */