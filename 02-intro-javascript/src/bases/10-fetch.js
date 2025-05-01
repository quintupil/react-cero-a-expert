//25. Fetch API
const apiKey = "FAiNQBWphR8NeK6iaTocWSfm69l9Xbid";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Paso1:
/*
peticion
  .then((resp) => {
    console.log(resp);
    resp.json().then((data) => {});
  })
  .catch(console.warn);
*/

//Paso2:
//Cadena de promesas
peticion
  .then((resp) => resp.json())
  //.then((data) => { //data.data es la data que necesitamos, y no se ve muy bien
  .then(({ data }) => {
    //Desestructurar data.data
    //console.log(data.images.original.url);
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn); //Este catch captura cualquier error que se pueda generar en las promesas anteriores
