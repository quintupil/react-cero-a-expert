import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
describe("Pruebas en <CounterApp />", () => {
  const initialValue = 10;

  /*test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });*/

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100}/>", () => {
    render(<CounterApp value={100} />);
    expect(screen.getAllByText(100)).toBeTruthy();
    //expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
    //screen.getByText("+1").click();
  });

  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
    //screen.getByText("+1").click();
  });

  test("Debe de funcionar el botón de Reset", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //fireEvent.click(screen.getByText("Reset"));
    //expect(screen.getByText(355)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(355)).toBeTruthy();
  });
});
