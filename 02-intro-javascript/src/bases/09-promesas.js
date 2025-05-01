import { getHeroeById } from "./bases/08-imp-exp";

//24. Promesa
/*

const promesa = new Promise((resolve, reject) => {
  ///El primer argumento de la función setTimeout es una función que se ejecutará y el segundo argumento es el tiempo en milisegundos que hará que se ejecute la función (que corresponde al primer argumento), esto cada 2 segundos.
  setTimeout(() => {
    ///console.log("2 segundos después");
    const heroe = getHeroeById(2);
    ///console.log(heroe);
    resolve(heroe);
    ///reject("No se pudo encontrar el héroe");
  }, 2000);
});

///el método then() se ejecutará cuando la promesa se resuelva correctamente, el catch cuando de error y finally que se ejecuta después del then o catch, siempre el finally es el último en ejecutarse
promesa
  .then((he) => {
    console.log(he);
  })
  .catch((err) => {
    console.warn(err);
  });

*/

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
  //return promesa;
};

getHeroeByIdAsync(3)
  /*.then((heroe) => {
    console.log("Heroe", heroe);
  })*/
  .then(console.log)
  /*.catch((err) => {
    console.warn(err);
  });*/
  .catch(console.warn); //Se puede simplificar de esta manera, porque el catch solo recibe un argumento, y ese a su vez se lo pasa a la función console.warn
