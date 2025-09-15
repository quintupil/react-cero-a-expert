import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo Switch 2",
    quantity: 10,
  },
  {
    productName: "Pro Controller",
    quantity: 11,
  },
  {
    productName: "Super Smash",
    quantity: 20,
  },
];

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={10} />
      <ItemCounter name="Pro Controller" quantity={11} />
      <ItemCounter name="Super Smash" quantity={12} /> */}
    </>
  );
}
