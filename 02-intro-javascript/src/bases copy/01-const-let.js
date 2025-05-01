//15. Variables y Constantes

//console.log("Hello, World!");

//var ¡No se debe de usar!
const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
  //let y const solo funcionan en el scope donde fueron declaradas
  let valorDado = 6;
  console.log(valorDado);

  const nombre = "Peter";
  console.log(nombre);
}

console.log(valorDado);
