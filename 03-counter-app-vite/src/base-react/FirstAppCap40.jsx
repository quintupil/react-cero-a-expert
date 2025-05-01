//40.Impresión de variables en el HTML
//1 Code:

//newMessage: La Constante no está en el scope global de la Aplicación.
//Está encapsulado en este mismo archivo
//newMessage: Beneficios al dejarlo fuera del Funtional Component "FirstApp"
//1. No se renderiza, solo se renderiza lo que está dentro de la función "FirstApp", es decir, React no va a volver a reprocesar las lineas que estan fuera de la función FirstApp
//const newMessage = "Charly";

//const newMessage = true; //Este valor no se muestra en el html

//const newMessage = [1, 2, 3, 4, 5]; //Literalmente se ve separado en la estructura HTML, revisar inspeccionando el elemento

//const como objeto tampoco se renderiza en la estructura HTML
//Los objetos no son validos, no tiene una estructura valida para el React Child
const newMessage = {
  message: "Hola Mundo!!",
  title: "Charly",
};

//2 Code:
//Importante: Mantener fuera las funciones:
//1.- Para no volver asignar espacio de memoria
//2.- Solo si es necesario dejar dentro del Scope de la función FirstApp
const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = () => {
  //Este Scope: se renderiza al volver a ejecutar, está función se vuelve a reprocesar por React cuando se requiera.
  return (
    <>
      {/* {} Simbolo significa que podemos poner una "Expresión JavaScript" */}
      {/* <h1>{1 + 1}</h1> */}

      {/* Esto si esta permitido */}
      {/* <h1> {newMessage.title} </h1> */}

      {/* Se puede procesar como un elemento JSON */}
      <code> {JSON.stringify(newMessage)} </code>

      {/* 2 Code: */}
      <h1>{getResult(4, 4)}</h1>
      <p>Subtitulos</p>
    </>
  );
};
