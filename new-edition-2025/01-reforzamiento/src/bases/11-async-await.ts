import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'FAiNQBWphR8NeK6iaTocWSfm69l9Xbid';


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src= url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {
    //Note: Para que el await funcione tiene que estar dentro de una función async
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    //const data: GiphyRandomResponse = await response.json();
    //const data = (await response.json()) as GiphyRandomResponse;
    const {data} = (await response.json()) as GiphyRandomResponse; //Desestructurando data
    return data.images.original.url;
}

//getRandomGifUrl().then( (url) => createImageInsideDOM(url) );

// Si tengo argumentos en una función de flecha, que simeplemente pasan a otra función 
// podemos simplemente mandar la función como referencia 
getRandomGifUrl().then( createImageInsideDOM );
