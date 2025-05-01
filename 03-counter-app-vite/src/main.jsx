// 1. Importamos React (necesario para poder usar JSX)
import React from "react";

// 2. Importamos el método para renderizar en el DOM
import ReactDOM from "react-dom/client";

//41. Colocar estilos de CSS
import "./style.css";

// 2.1 Los export default se deben definir sin simbolo {}, para el resto entre {}, renderizar solo const como variable "Hola" no funciona y arroja un error, debe ser como una function para que renderice correctamente.
// import App, { Hola, GetSaludo } from "./HelloWorldApp";

// 2.2 Creando FirstApp
// import { FirstApp } from "./FirstApp";

//2.3 Creando CounterApp
import { CounterApp } from "./CounterApp";

// 3. Definimos nuestro componente funcional (Functional Components) principal (App)
// 3.1 Se migra función App hacia archivo "HelloWorldApp.jsx"
/*function App() {
  /// 4. Este componente retorna JSX (mezcla de HTML y JS)
  return <h1>Hola Mundo</h1>;
}*/

// 5. Obtenemos la referencia al elemento con id="root" en index.html
const rootElement = document.getElementById("root");

// 6. Creamos la "raíz" para nuestra app con createRoot
const root = ReactDOM.createRoot(rootElement);

// 7. Renderizamos el componente App envuelto en React.StrictMode
root.render(
  <React.StrictMode>
    {/* Padre de las properties que recibe la función FirstApp(props) */}

    {/* 2 Code: Destructurando en Functional Component: */}
    {/*<FirstApp title="Hola Desde etiqueta <FirstApp>"></FirstApp> */}

    {/*3 Code: En functional componente se desestructura con valor por defecto */}
    {/* <FirstApp></FirstApp> */}
    {/* <FirstApp title="Hola Mundo!!!!!" subTitle="123"></FirstApp> */}

    <CounterApp></CounterApp>
  </React.StrictMode>
);
