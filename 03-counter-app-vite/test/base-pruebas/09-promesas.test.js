import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      //expect(true).toBe(false);
      //expect(hero).toBe(false);
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done(); //Para indicar a jest que la prueba termino
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si heroe no existe", (done) => {
    const id = 1000;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      done(); //Para indicar a jest que la prueba termino
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done(); //Para indicar a jest que la prueba termino
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done(); //Para indicar a jest que la prueba termino
      });
  });
});
