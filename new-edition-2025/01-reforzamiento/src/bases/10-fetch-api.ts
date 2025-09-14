const API_KEY = 'FAiNQBWphR8NeK6iaTocWSfm69l9Xbid';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then((response) => {
        //console.log(response);
        response.json().then((data) => { //promise en cadena 
            //console.log(data);
            const imageUrl = data.data.images.original.url;
            //console.log(imageUrl);

            const imgElement = document.createElement('img');
            imgElement.src= imageUrl;

            document.body.append(imgElement);

        });
    })
    .catch((err) => {
        console.error(err);
    });

