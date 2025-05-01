// 1. Importamos React (necesario para poder usar JSX)
import React from "react";

// 2. Importamos el método para renderizar en el DOM
import ReactDOM from "react-dom/client";

// 2.1 Los export default se deben definir sin simbolo {}, para el resto entre {}, renderizar solo const como variable "Hola" no funciona y arroja un error, debe ser como una function para que renderice correctamente.
import App, { Hola, GetSaludo } from "./HelloWorldApp";

// 2.2 Creando FirstApp
import FirstApp from "./FirstApp";

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
    {/* 37. Nuestro Primer componente*/}
    {/* <App /> */}
    {/* <GetSaludo /> */}
    {/* <Hola /> Renderizar una const arroja un error en la consola*/}
    {/* 38. Creando un nuevo componente*/}

    {/* Puedo importar mas de un archivo JSX */}
    {/* <App /> */}
    {/* <GetSaludo /> */}

    <FirstApp></FirstApp>
  </React.StrictMode>
);
