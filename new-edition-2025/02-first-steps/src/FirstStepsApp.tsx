import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter key="1" name="Nintendo Switch 2" quantity={10} />
      <ItemCounter key="2" name="Pro Controller" quantity={11} />
      <ItemCounter key="3" name="Super Smash" quantity={12} />
    </>
  );
}
