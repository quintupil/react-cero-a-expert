describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    //Code 1:
    /*if (0 === 1) {
          throw new Error("No puede dividir entre cero");
        }*/
    //Code 2:
    //1. Inicialización
    const message1 = "Hola Mundo";
    //const message1 = "Hola Mundo ";//Prueba falla

    //2. Estimulo
    const message2 = message1.trim();

    //3. Aserciones Observar el comportamiento... esperado
    expect(message1).toBe(message2); // expect existe en Jest
    // Lo esperado es que message1 es igual a message2, de lo contrario la prueba falla
  });
});
