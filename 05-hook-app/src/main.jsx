import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { HooksApp } from "./HooksApp";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    {/** -- Pruebas de Conceptos -- */}
    {
      /**Ejercicio 1: hooks - useState */
      /**<CounterApp />*/
    }

    {
      /**Ejercicio 2: useCounter - CustomHook*/  
      <CounterWithCustomHook />
    }

    {
      /*<HooksApp/>*/
    }


    {/*<SimpleForm/>*/}
  </StrictMode>
);
