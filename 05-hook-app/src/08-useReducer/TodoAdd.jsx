import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  
  const {description, onInputChange, onResetForm} = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo); // Call the parent function to add the todo
    onResetForm(); // Reset the form after adding the todo
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
        Agregar
      </button>
    </form>
  );
};
