// 22. Import, export y funciones comunes de arreglos

//heroes no es necesario agregar la extensión .js, porque se esta importando un archivo .js
//import { heroes } from "../data/heroes";

// 23. Multiples exportaciones y exportaciones por defecto
//Cuando se exporta por defecto, no es necesario colocar las llaves
//{ owner } es como una destructuración de un objeto desde archivo js, se esta importando la constante owner que se encuentra en el archivo heroes.js y no fue declarada como export por defecto
import heroes, { owners } from "../data/heroes";

//Cuando no tengo constantes por defecto, se puede importar de la siguiente manera
//import { heroes, owners } from "../data/heroes";

//import cualquierCosa from "../data/heroes";

//Paso1:
//Si nos da el tipo Undefined es porque no se esta exportando la constante heroes
//console.log(heroes);

//Paso2: Uso de find
//El find es una función que nos permite encontrar un elemento dentro de un arreglo.
//Como argumento recibe una función que se conoce como callback, que se ejecuta por cada uno de los elementos del arreglo. el find internamente tiene una lógica que va a ejecutar esa función por cada uno de los elementos del arreglo.
/*
const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};
*/

/*
///Forma simplificada
///Si la función solo tiene un return, se puede simplificar de la siguiente manera
const getHeroeById = (id) => {
  ///Si la condición es verdadera, se retorna el objeto heroe
  ///Si la condición es falsa, no se retorna nada
  ///heroe es solo un argumento, se puede cambiar por cualquier otro nombre. Dicha variable representa a cada uno de los elementos del arreglo heroes, porque recuerda que find tiene un bucle interno que va a recorrer cada uno de los elementos del arreglo heroes y se lo pasa como argumento a la función callback para que evalue la condición que se le esta pasando.
  return heroes.find((heroe) => heroe.id === id);
};
*/

///Forma mas simplificada
///Si la función solo tiene un return, se puede simplificar de la siguiente manera
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeById(2)); // {id: 2, name: "Spiderman", owner: "Marvel"}

//Paso3: Uso de filter
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner("DC"));
//console.log(owners);
