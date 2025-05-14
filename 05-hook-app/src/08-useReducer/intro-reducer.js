const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    }, 
];

//el reducer recibe el estado y la accion   
//el reducer es una funcion pura que recibe el estado y la accion y devuelve un nuevo estado, la acción que recibe por parámetro indica como se debe modificar el estado 
const todoReducer = (state = initialState, action) => {

    if (action?.type === '[TODO] Add Todo') {
        return [...state, action.payload];
    }
    return state;
};



let todos = todoReducer();
console.log( todos );

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add Todo",
  payload: newTodo,
};


todos = todoReducer( todos, addTodoAction);

console.log( todos );