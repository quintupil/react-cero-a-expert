export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=z5i5R1BvO6xPSBuNcUs55cMPb4dWHblA&q=${category}&limit=20`;

  //console.log(url);

  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  //console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  //console.log(gifs);
  return gifs;
};
