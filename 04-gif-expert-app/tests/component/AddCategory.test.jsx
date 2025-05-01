import { fireEvent, render, screen } from "@testing-library/react";

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

import { AddCategory } from "../../src/component/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(
      <AddCategory
        onNewCategory={() => {
          //screen.debug();
        }}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });
});
