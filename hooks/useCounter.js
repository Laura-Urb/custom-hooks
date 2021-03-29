import { useState } from "react";

export const useCounter = (incialState = 10) => {
  const [counter, setCounter] = useState(incialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(incialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
