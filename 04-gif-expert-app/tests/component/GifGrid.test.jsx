import { render, screen, waitFor } from "@testing-library/react";
import { GifGrid } from "../../src/component/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "";

  test("debe de mostrar el loading inicialmente", async () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValueOnce({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    screen.debug();

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    /*await waitFor(() => {
      expect(screen.getByText("Cargando...")).toBeTruthy();
    });*/
  });
});
