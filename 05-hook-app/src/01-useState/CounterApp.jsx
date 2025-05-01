import { useState } from "react";

export const CounterApp = () => {
  /*const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });*/

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  //Si useState retorna un objeto con muchas propiedades se debe usar el operador de propagación
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state, //Spreed para propagar el resto de las propiedades del objeto y tiene que estar definido antes de la propiedad que se quiere modificar (counter1: counter1 + 1)
            counter1: counter1 + 1,
            /*counter2,
            counter3,*/
          })
        }
      >
        +1
      </button>
    </>
  );
};
