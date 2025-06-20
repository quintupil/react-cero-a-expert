import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

//const initialState = [
    /*{
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },*/
//];

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />
        <div className="row">
            
            <div className="col-7">
                {/** onDeleteTodo={id = handleDeleteTodo(id)}*/}
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd  onNewTodo={ handleNewTodo }/>
            </div>
        </div>  
    </>
  );
};