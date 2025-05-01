// MOCK de fetch antes de ejecutar tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [
          {
            id: "0vLnT4x5j5fOj4ZYtC",
            title: "Music Video Animation GIF by Aries",
            images: {
              downsized_medium: {
                url: "https://giphy.com/gifs/VXJWhaO7afRe",
              },
            },
          },
          {
            id: "VXJWhaO7afRe",
            title: "One Punch Man GIF",
            images: {
              downsized_medium: {
                url: "https://giphy.com/gifs/aries-wunderworld-one-punch-aries-0vLnT4x5j5fOj4ZYtC",
              },
            },
          },
        ],
      }),
  })
);

import { getGifs } from "../../src/helpers/getGifs";
describe("Pruebas en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("OnePunch");
    console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
