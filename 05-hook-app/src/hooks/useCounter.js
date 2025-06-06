import { useState } from 'react';

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    //console.log(value);
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter, // Retorno del contador actual
    
    // Retorno de las funciones para modificar el contador
    increment,
    decrement,
    reset,
  };

  
  /** 
    Puedo retornar cualquier cosa un objeto, un arreglo etc... Lo más común y práctico es retornar un objeto con las propiedades que se quieren usar en el componente que lo consume. Así se puede desestructurar el objeto y usar las propiedades directamente.
  */
  // Eejmplo de retorno de un arreglo:
  // return [counter, increment, decrement, reset]; //Retornando un arreglo
};
