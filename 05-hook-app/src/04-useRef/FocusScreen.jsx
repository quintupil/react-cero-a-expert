import { useRef } from "react";

export const FocusScreen = () => {
  /**
   useRef: Es un Hook de React que nos permite crear referencias a elementos del DOM. Es útil para controlar la renderización de componentes y para acceder a elementos del DOM sin necesidad de usar el estado. También se puede usar para almacenar valores mutables que no causan una nueva renderización cuando cambian.

  useRef: Devuelve un objeto mutable con una propiedad .current que se inicializa con el valor pasado como argumento. Este objeto se mantiene constante durante toda la vida del componente.
   */
  const inputRef = useRef();
  //console.log(inputRef);

  const onClick = () => {
    //document.querySelector('input').focus();
    //document.querySelector("input").select();
    console.log( inputRef );
    inputRef.current.select();

  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        //Etiqueta ref React: Permite asignar la referencia al input
        ref={inputRef} 
        type="text"
        placeholder="Enter your name"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
}