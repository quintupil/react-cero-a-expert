export const todoReducer = ( initialState, action) => {

    switch( action.type ) {
        case 'ABC':
            throw new Error(`Action.type: ${ action.type } no está implementada`);

        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return  initialState.filter(todo => todo.id !== action.payload);
        
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) { //payload == id
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });
            
        default:
            return initialState;
    }
}