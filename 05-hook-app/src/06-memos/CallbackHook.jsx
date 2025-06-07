import { useCallback, useState, useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);
    
    /**Hook useCallback: Me sirve para memorizar funciones */
    const incrementFather = useCallback(
        (value) => {
            //setCounter( counter + 1 ); // Esto vuelve a renderizar el componente
            setCounter((c) => c + value); // Esto no vuelve a renderizar el componente, queda en memoria la función.
        }, 
        [],
    );

    /*const incrementFather = () => {
        setCounter( counter + 1 );
    }*/


    /** Otro caso de uso: Cuando la funcion incrementFather cambie disparar algún efecto */    
    useEffect( () => {
        //incrementFather(); // Esto no es necesario, ya que el componente se renderiza cuando se hace click en el botón de ShowIncrement
    },[incrementFather]); // Esto es para que no se vuelva a renderizar el componente, ya que incrementFather no cambia su referencia de memoria.    

    
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ incrementFather } />
        </>
    )
}