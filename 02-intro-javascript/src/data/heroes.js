//export sirve para exportar la constante heroes para que pueda ser utilizada en otro archivo .js

//Paso 1: Exportar la constante heroes
//export const heroes = [

//Paso 2: Exportar array de objetos por defecto
//export default [

//Paso 3: Declarar constante heroes
const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

//Paso4: Declarar contante owner
export const owners = ["DC", "Marvel"];
//const owners = ["DC", "Marvel"];

//Paso3: Exportar la constante heroes por defecto, para que pueda ser utilizada en otro archivo .js
export default heroes;

//Paso5
//export { heroes as default, owners };
