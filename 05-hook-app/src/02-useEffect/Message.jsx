import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Componente montado");
    const onMouseMove = ({ x, y }) => {
      //console.log(x, y);
      setCoords({ x, y });
    };


    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("Componente desmontado");
      
      /** Para remover el EventListener del mouse necesito una referencia por eso se utiliza la función onMouseMove*/
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
