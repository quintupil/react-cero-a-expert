import { TodoItem } from "./TodoItem";

export const TodoList = ({todos=[]}) => {
  return (
    <>
      {/** TodoList */}
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
      </ul>
      {/** FIN TodoList */}
    </>
  );
};
