import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    //console.log(heroe);

    //expect(heroe).toBe(undefined);
    expect(heroe).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    //console.log(heroe);

    //expect(heroe).toBe(undefined);
    expect(heroe.length).toBe(3);
    expect(heroe).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner debe retornar heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    //console.log(heroe);

    //expect(heroe).toBe(undefined);
    expect(heroe.length).toBe(2);
    expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  //Tarea
  // Debe retornar un arreglo con los héroes de DC
  // length === 3
  // toEqual al arreglo filtrado
  //Debe retornar un arreglo con los héroes de Marvel
  //length === 2
});
