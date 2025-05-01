//27. Operador condicional ternario

const activo = true;

//Paso1:
/*
let mensaje = "";
if (activo) {
  mensaje = "Activo";
} else {
  mensaje = "Inactivo";
}
console.log(mensaje);
*/

//let mensaje = activo ? "Activo" : "Inactivo";
//let mensaje = activo ? "Activo" : null;
const mensaje = activo && "Activo";

console.log(mensaje);
