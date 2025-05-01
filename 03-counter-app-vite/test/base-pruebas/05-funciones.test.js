import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    //Falla la prueba porque no se puede comparar un objeto con otro directamente, ya que se comparan las referencias en memoria.
    //expect(testUser).toBe(user);

    //expect(testUser).toEqual(user);
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Carlos";
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
