export const todoReducer = ( initialState, action) => {

    switch( action.type ) {
        case 'ABC':
            throw new Error(`Action.type: ${ action.type } no está implementada`);

        case '[TODO] Add Todo':
            return [...initialState, action.payload];
            
        default:
            return initialState;
    }
}