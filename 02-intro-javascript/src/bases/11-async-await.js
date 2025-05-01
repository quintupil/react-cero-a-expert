//26. Async Await

//Paso1:
/*
const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve("https://asdasd.com");
  });
  return promesa;
};
getImagenPromesa().then(console.log);
*/

//Paso2:
/*
///Mismo código pero más simplificado
const getImagenPromesa = () =>
  new Promise((resolve) => resolve("https://asdasd.com"));

getImagenPromesa().then(console.log);
*/

//Paso3: Async Await
//Async siempre va a retornar una promesa y Await siempre va a esperar una promesa
/*
const getImage = async () => {
  return new Promise((resolve) => {
    resolve("https://asdasd.com");
  });
};
getImage().then(console.log);
*/

//Paso4: Await
//Await siempre va a esperar una promesa
/*
const getImage = async () => {
  ///Await nos auyuda a que podamos trabajar el código como si fuera asincrónico
  return new Promise((resolve) => {
    resolve("https://asdasd.com");
  });
};
getImage().then(console.log);
*/

//Paso5: Async Await
/*
///La unica condición para usar await es que la función sea async
const getImage = async () => {
  const apiKey = "FAiNQBWphR8NeK6iaTocWSfm69l9Xbid";
  ///Await le dice a la función que espere a que la promesa se resuelva, antes de ejecutar la siguiente línea
  const resp = await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const { data } = await resp.json();

  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

getImage();
*/

//Paso6: Async Await manejo de errores
///Para manejar errores en async await se usa try y catch
const getImage = async () => {
  try {
    const apiKey = "FAiNQBWphR8NeK6iaTocWSfm69l9Xbid";
    ///Await le dice a la función que espere a que la promesa se resuelva, antes de ejecutar la siguiente línea
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (err) {
    //manejo del error
    console.error(err);
  }
};

getImage();
