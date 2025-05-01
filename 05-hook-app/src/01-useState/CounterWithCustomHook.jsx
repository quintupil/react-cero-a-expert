import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  //Tener consideracion que el useCounter si retorna un arreglo se debe desestructurar con [], si es un objeto con {}.
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      {/* onClick={increment} De esta forma estoy enviando el evento y no el valor del contador que se encuentra en el useCounter */}
      {/* <button className="btn btn-primary" onClick={increment}> */}
      <button className="btn btn-primary" onClick={(event) => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={(event) => decrement(2)}>
        -1
      </button>
    </>
  );
};
