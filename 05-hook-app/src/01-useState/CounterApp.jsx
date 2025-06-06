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


  //useState: Retorna un objeto con muchas propiedades se debe usar la desestructuración para obtener las propiedades que se quieren usar, en este caso counter1, counter2 y counter3. Si no se hace esto, se tendria que usar state.counter1, state.counter2 y state.counter3. 
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick = { () =>
          setCounter({
            //...state: Spreed para propagar el resto de las propiedades del objeto y tiene que estar definido antes de la propiedad que se quiere modificar.
           
            ...state, 
            counter1: counter1 + 1,
           
            /*
              Nombre de la propiedad es igual al nombre de la variable, se puede reducir solo escribiendo la propiedad.
              counter2: counter2,
              counter3 : counter3,
            */

            /* 
              Reducido
              counter2,
              counter3,
            */            
          })
        }
      >
        +1
      </button>
    </>
  );
};
