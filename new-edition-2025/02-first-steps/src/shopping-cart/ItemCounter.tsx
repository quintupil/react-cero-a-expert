import { useState } from "react";
import styles from "./ItemCounter.module.css";
// import './ItemCounter.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  //console.log({ name, quantity });
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <section
      className={styles.itemRow}
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles["item-text"]}
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
