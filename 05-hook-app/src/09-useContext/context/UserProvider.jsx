import { UserContext } from './UserContext';

const user = {
    id: '123',
    name: 'Carlos García',
    email: 'carlos.garcia@gmail.com'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
