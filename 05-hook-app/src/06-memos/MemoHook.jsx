import { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    // useMemo: Memoriza el resultado de una función pesada
    // y lo recalcula solo cuando cambian las dependencias (counter).
    const memoizedValue = useMemo( () => heavyStuff(counter), [counter]);

    return (
      <>
        <h1>
          Counter: <small>{counter}</small>
        </h1>
        <hr />
        
        <h4>{ memoizedValue }</h4>
        <button onClick={() => increment()} className="btn btn-primary">
          +1
        </button>

        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </>
    );
}