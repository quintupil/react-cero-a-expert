//39. Retornar elementos en el Componente - Fragment
//import { Fragment } from "react";

//38. Creando un nuevo componente
const FirstApp = () => {
  // 4. Este componente retorna JSX (mezcla de HTML y JS)
  return (
    // Para retornar más de un elemento HTML requiere un padre y esto genera algunos problemas:
    // 1. Una solución es agregar un div padre, no es una solución muy eficiente, porque  cuando se esta renderizando con estilos, ese div puede romper los estilos.
    // 2. Le estamos pidiendo a React renderizar un componente que no se utiliza, y se usa solo para eliminar error.
    // <Fragment>
    <>
      {/* Sinonimo de Fragment <></>*/}
      <h1>Hola soy Carlos</h1>
      <p>Subtitulo</p>
    </>
    // </Fragment>
  );
};
export default FirstApp;
