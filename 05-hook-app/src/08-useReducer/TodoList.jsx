import { TodoItem } from "./TodoItem";

export const TodoList = ({todos=[], onDeleteTodo}) => {


  return (
    <>
      {/** TodoList */}
      <ul className="list-group">
        {/** {/** onDeleteTodo={id => onDeleteTodo(id)} */} 
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={ onDeleteTodo }></TodoItem>
        ))}
      </ul>
      {/** FIN TodoList */}
    </>
  );
};
