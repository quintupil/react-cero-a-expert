import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toEqual(expect.any(String));
  });

  test("getImagen debe de retornar un error si no tenemos ApiKey", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url).toBe("No se encontró la imagen");
  });
});
