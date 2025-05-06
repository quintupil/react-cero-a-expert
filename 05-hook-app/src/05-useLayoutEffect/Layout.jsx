import { useCounter, useFetch } from '../hooks';
//import { LoadingMessage } from './LoadingMessage';
//import { PokemonCard } from './PokemonCard';

import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {

    const { counter, decrement, increment } = useCounter(1);

    //console.log(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    //aux = `https://pokeapi.co/api/v2/pokemon/${ counter }`;
    //console.log("aux =>", aux);

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    //console.log("data=>", data)
    
    return (
        <>
            <h1>Información Pokemóns</h1>
            <hr />
            
            {
                isLoading 
                ? <LoadingMessage /> 
                : (
                    <PokemonCard 
                        id={counter} 
                        name={data.name}
                        sprites={[
                            data.sprites.front_default, 
                            data.sprites.front_shiny, 
                            data.sprites.back_default, 
                            data.sprites.back_shiny
                        ]}
                    />
                )
            }
            

            <button 
                className='btn btn-primary mt-2'
                onClick={() => counter > 1 && decrement()}>
                Anterior    
            </button>
            <button 
                className='btn btn-primary mt-2'
                onClick={() => increment()}>
                Siguiente
            </button>
        </>
    )
}
