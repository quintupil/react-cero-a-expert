import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { HooksApp } from "./HooksApp";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEffect/Layout";

import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/** -- Pruebas de Conceptos -- */}
    {/**Ejercicio 1: hooks - useState */
    /**<CounterApp />*/}

    {/**Ejercicio 2: useCounter - CustomHook*/
    /*<CounterWithCustomHook />*/}

    {/**Ejercicio 3: useEffect - SimpleForm */
    /**<SimpleForm />**/}

    {/**Ejercicio 4: useEffect - FormWithCustomHooks.jsx */
    /**<FormWithCustomHook />*/}

    {/**Ejercicio 5: useFetch - MultipleCustomHooks.jsx */}
    {<MultipleCustomHooks />}

    {/**Ejercicio 6: useRef - FocusScreen.jsx */
      /**<FocusScreen />*/
    }
    
    {
      /**Ejercicio 7: useLayoutEffect.jsx*/
      /**<Layout />*/
    }
  </StrictMode>
);
