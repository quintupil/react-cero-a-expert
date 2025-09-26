import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

/**
 * describe: Permite agrupar pruebas.
 **/
describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);
    //console.log({ result });

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two positive numbers", () => {
    const a = 1;
    const b = 2;
    const result = subtract(a, b);
    console.log({ result });
    expect(result).toBe(a - b);
  });

  test("should subtract two negative numbers", () => {
    const a = -1;
    const b = -2;
    const result = subtract(a, b);
    console.log({ result });
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const a = 1;
    const b = 2;
    const result = multiply(a, b);
    console.log({ result });
    expect(result).toBe(a * b);
  });

  test("should multiply two negative numbers", () => {
    const a = -1;
    const b = -2;
    const result = multiply(a, b);
    console.log({ result });
    expect(result).toBe(a * b);
  });
});

describe("divide", () => {
  test("should divide two positive numbers", () => {
    const a = 2;
    const b = 4;
    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
