// 21. Desestructuración de arreglos

//Paso1: Destructurando Arreglos
const personajes = ["Goku", "Vegeta", "Trunks"];
/*
console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

//Cambiar nombre a la variable y todas sus referencia desde VSC tecla F2 si se esta en Windows
/*
const [goku] = personajes;
console.log(goku);
*/

/*
const [p1] = personajes;
console.log(p1);
*/

/*
const [, p1] = personajes;
console.log(p1);
*/

const [, , p3] = personajes;
console.log(p3);

//Paso 2:
const retornaArreglo = () => {
  return ["ABC", 123];
};

/*
const arr = retornaArreglo();
console.log(arr);
*/

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre
const getUseState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

/*
const arr = getUseState("Goku");
console.log(arr);
arr[1](); //Llamando a la función que esta en la posición 1 del arreglo
*/

const [nombre, setNombre] = getUseState("Goku");
console.log(nombre);
setNombre();
