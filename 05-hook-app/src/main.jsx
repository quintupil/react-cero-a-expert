import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { HooksApp } from "./HooksApp";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memos/Memorize";
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallbackHook } from "./06-memos";
//import { Padre } from './07-tarea-memo/Padre';
//import { TodoApp } from "./08-useReducer";
//import "./08-useReducer/intro-reducer"; 

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/** -- Pruebas de Conceptos -- */}

    {/**Ejercicio 0: HooksApp.jsx */
      /*<HooksApp />*/
    }
    
    {/**Ejercicio 1: hooks - useState */
      /*<CounterApp />*/
    }

    {/**Ejercicio 2: useCounter - CustomHook*/
      <CounterWithCustomHook />
    }

    {/**Ejercicio 3: useEffect - SimpleForm */
    /**<SimpleForm />**/}

    {/**Ejercicio 4: useEffect - FormWithCustomHooks.jsx */
    /**<FormWithCustomHook />*/}

    {/**Ejercicio 5: useFetch - MultipleCustomHooks.jsx */}
    {/**<MultipleCustomHooks />*/}

    {/**Ejercicio 6: useRef - FocusScreen.jsx */
      /**<FocusScreen />*/
    }
    
    {
      /**Ejercicio 7: useLayoutEffect.jsx*/
      /**<Layout />*/
    }

    {
      /**Ejercicio 8: Memorize.jsx */
      /**<Memorize/>*/
    }

    {
      /**Ejercicio 9: MemoHook.jsx */
      /**<MemoHook/>*/
    }

    {
      /**Ejercicio 10: CallbackHook.jsx */
      /**<CallbackHook/>*/
    }
    {
      /**Ejercicio 11: Padre.jsx */
      /**<Padre/>*/
    }

    {
      /**Ejercicio 12: TodoApp.jsx */
      /*<TodoApp/>*/
    }
    
  
  </StrictMode>
);
