//19. Funciones en JavaScript

// No se recomienda usar este tipo de declaración de funciones
/*function saludar(nombre) {
  return `Hola, ${nombre}`;
}*/

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

//saludar = 30; // No se puede reasignar una función  a una variable  que ya fue declarada TypeError: Assignment to constant variable.

console.log(saludar("Naruto"));

//console.log(saludar); // Referencia [Function: saludar]

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar2("Vegeta"));

const saludar3 = (nombre) => `Hola, ${nombre}`; // Si la función solo tiene un return se puede simplificar de esta manera

console.log(saludar3("Goku"));

const saludar4 = () => `Hola Mundo`; // Si la función no tiene argumentos se puede simplificar de esta manera

console.log(saludar4());

/*const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
};*/

// Si la función solo retorna un objeto se puede simplificar de esta manera
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// Estos son los parámetros por defecto
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
