import React, { useState } from "react";
import RandomWords from 'random-words';

const Context = React.createContext();

function ContextProvider({children}) {
  const [mistake, setMistake] = useState(0);
  const [guess, setGuess] = useState(new Set([]));
  const [answer, setAnswer] = useState(RandomWords());

  return(
    <Context.Provider value={{
      mistake: mistake,
      setMistake: setMistake,
      guess: guess, 
      setGuess: setGuess,
      answer: answer,
      setAnswer: setAnswer
    }}>

      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}