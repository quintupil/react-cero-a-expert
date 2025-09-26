import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    //console.log(document.body);

    /**Primera forma de utilizar render**/
    const { container } = render(<MyAwesomeApp />);
    //console.log(container);
    //console.log(container.innerHTML);

    /**Segunda forma de utilizar render**/
    //render(<MyAwesomeApp />);
    //console.log(screen.debug());
    screen.debug();
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");
    //console.log(h1?.innerHTML);
    //expect(h1?.innerHTML).toBe("Fernando");
    expect(h1?.innerHTML).toContain("Carlos");
    expect(h3?.innerHTML).toContain("García");
  });

  test("should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();
    //const h1 = screen.getByRole("heading", {
    //level: 1,
    //});
    const h1 = screen.getByTestId("first-name-title");
    //console.log(h1.innerHTML);
    expect(h1.innerHTML).toContain("Carlos");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot", () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
