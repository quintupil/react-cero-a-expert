import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "carlos",
    email: "carlos.garcia@gmail.com",
  });

  const { username, email } = formState;

  const handleChange = ({ target }) => {
    //console.log(target.value);
    const { name, value } = target;
    //console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //useEffect, se recomienda usar el useEffect para realizar efectos secundarios, como peticiones http, escuchar cambios en el DOM, etc. También recomiendan que lleve dependencias, para que se ejecute solo cuando cambie algo específico. Primer elemento es el callback, segundo es el array de dependencias.
  //Si no lleva dependencias, se ejecuta cada vez que se renderiza el componente. Si lleva un array vacío, se ejecuta solo una vez, cuando se monta el componente. Si lleva un array con dependencias, se ejecuta cada vez que cambie alguna de ellas.
  useEffect(() => {
    //console.log("useEffect called!");
  }, []);

  //Crear efectos especializados y específicos, para que no se ejecute cada vez que se renderiza el componente.
  useEffect(() => {
    //console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed!");
  }, [email]);
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      {/* Si el username es carlos, se muestra el componente Message. */}
      {username === "carlos" && <Message />}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="carlos@gmail.com"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </>
  );
};
