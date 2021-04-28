import React, { Component } from "react";
import "./../styles/HangPerson.css";
import RandomWord from './Words.js';

export default class HangPerson extends Component {

  static defaultProps = {
    maxWrong: 6,
    // images: [step0, step1, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: RandomWord()
    }
  }

  handleGuess = (event) => {
    let letter = event.target.value;
    this.setState(state => ({
      guessed: state.guessed.add(letter),
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split('').map(letter => (this.state.guessed.has(letter) ? letter : ' _ '));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split('').map(letter => (
      <button key={letter} value={letter} onClick={this.handleGuess} disabled={this.state.guessed.has(letter)}>
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      anwer: RandomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    let gameStat = this.generateButtons();

    return (
      <>
        <div className="HangPerson">
          <h1>HANG PERSON</h1>
          <div className="float-right">
            Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
          </div>
          <div className="text-center">
            {/* <img src={this.props.images[this.state.mistake]} /> */}
          </div>
          <div className="text-center">
            <p>Guess the word:</p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>
              {gameStat}
            </p>
            <button onClick={this.resetButton}>Reset</button>
          </div>
        </div>
      </>
    )
  }
}
