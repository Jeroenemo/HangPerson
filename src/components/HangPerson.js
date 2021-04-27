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

  guessedWord() {
    return this.state.answer.split('').map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;

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
          </div>
        </div>
      </>
    )
  }
}

