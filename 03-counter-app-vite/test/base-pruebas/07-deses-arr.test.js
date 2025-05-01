import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr-test", () => {
  test("Debe de retornar un string y un number", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC"); // Verifica que el primer elemento es un string "ABC"

    //expect(numbers).toBe("123"); // Error porque toBe verifica tipos de datos, y el valor es un número. Debe ser toBe(123)
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string"); // Verifica que el primer elemento es un string

    expect(typeof numbers).toBe("number"); // Verifica que el segundo elemento es un número

    expect(letters).toEqual(expect.any(String)); // Verifica que el primer elemento es un string usando toEqual y expect.any
    expect(numbers).toEqual(expect.any(Number)); // Verifica que el segundo elemento es un número usando toEqual y expect.any
  });
});
