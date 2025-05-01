// 37. Nuestro primer componente
//export function App() {
function App() {
  // 4. Este componente retorna JSX (mezcla de HTML y JS)
  //document.createElement.....
  return <h1>Hola Mundo!!! - Desde App</h1>;
}

const GetSaludo = () => <h1>Hola Mundo!!! - Desde GetSaludo </h1>;

//hola con la primera en minuscula no el Functional Component no renderiza el HTML
const Hola = "Hola Mundo!!! - Desde hola";

export default App;
export { Hola, GetSaludo };
