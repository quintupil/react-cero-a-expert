//47. useState - Hook
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    //Code 1:
    //setCounter(counter + 1);

    //Code 2:
    setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};
