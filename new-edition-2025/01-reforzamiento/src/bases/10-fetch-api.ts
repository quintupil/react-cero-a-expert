import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'FAiNQBWphR8NeK6iaTocWSfm69l9Xbid';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src= url;
    document.body.append(imgElement);
}

myRequest
    .then((response) => {
        response.json().then(({data}: GiphyRandomResponse) => { //promise en cadena 
            const imageUrl = data.images.original.url;
            //const imageUrl = data.data.images.original.url;
            createImageInsideDOM(imageUrl);
        });
    })
    .catch((err) => {
        console.error(err);
    });

