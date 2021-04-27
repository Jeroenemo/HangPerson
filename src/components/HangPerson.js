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
  render() {
    return (
      <>
        <h1>{this.state.answer}</h1>
      </>
    )
  }
}

