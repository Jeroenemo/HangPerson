import React, { useState, useEffect} from 'react';
import RandomWords from 'random-words';
import './../styles/HangPerson.css';
import one from './../img/one.png';
import two from './../img/two.png';
import three  from './../img/three.png';
import four from './../img/four.png';
import five from './../img/five.png';
import six from './../img/six.png';
import seven from './../img/seven.png';

export default function HangPerson() {

  const defaultProps = {
    maxWrong: 7,
    images: ["", one, two, three, four, five, six, seven]
  }
  
  const [mistake, setMistake] = useState(0);
  const [guess, setGuess] = useState(new Set([]));
  const [answer, setAnswer] = useState(RandomWords());

  const handleGuess = (event) => {
    let letter = event.target.value;
    setGuess(new Set([...guess, letter]));
    setMistake(mistake + (answer.includes(letter) ? 0 : 1));
  }

  const guessedWord = () => {
    return answer.split('').map(letter => (guess.has(letter) ? letter : ' _ '))
  }

  const generateButtons = () => {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
      <button key={letter} value={letter} onClick={handleGuess} disabled={guess.has(letter)}>
        {letter}
      </button>
    ));
  }

  const resetButton = () => {
    setMistake(0);
    setGuess(new Set([]));
    setAnswer(RandomWords());
  }
  
  const gameOver = mistake >= defaultProps.maxWrong;
  const isWinner = guessedWord().join('') === answer;
  let gameStatus = generateButtons();
  isWinner && (gameStatus = "YOU WON");
  gameOver && (gameStatus = "YOU LOST");
  
  // const wordToGuess = guessedWord();
  return (
    <>
      {console.log(answer)}
      <div className="HangPerson">
        <h1>HANG PERSON</h1>
          <div className="float-right">
          Wrong Guess: {mistake} of {defaultProps.maxWrong}
          </div>
          <div className="text-center">
            <img src={defaultProps.images[mistake]}/>
          </div>
          <div className="text-center">
            <p>Guess the word:</p>
            <p>
              {!gameOver ? guessedWord() : answer}
            </p>
            <p>
              {gameStatus}
            </p>
            <button onClick={resetButton}>Reset</button>
        </div>
      </div>
    </>
  )
}