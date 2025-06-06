import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {


  //Tener consideracion que el useCounter si retorna un arreglo se debe desestructurar con [], si es un objeto con {}.
  const { counter, increment, decrement, reset } = useCounter();


  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      {
        /* 
          onClick={increment} De esta forma estoy enviando el evento y no el valor del contador que se encuentra en el useCounter. 
            <button className="btn btn-primary" onClick={increment}> 
          
          Para evitar enviar el evento se crea una función que llame a la función increment del useCounter y le pase el valor que se quiere incrementar. Se ignora el parámetro del evento, ya que no se necesita en este caso, aunque igual está presente como parámetro a la función de felcha.

          Si no se va usar el evento onclick, queda mas limpio no incluir el parámetro del evento, por ejemplo:
          <button className="btn btn-primary" onClick={() => increment(2)}>
        */
      }
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +2
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={(event) => decrement(2)}>
        -2
      </button>
    </>
  );
};
