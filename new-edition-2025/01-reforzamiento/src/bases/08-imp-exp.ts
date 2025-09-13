import { heroes, Owner, type Hero } from "./data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });
    //if( !hero )
        //throw new Error(`No existe un héroe con el id ${id}`);
    return hero;
}

console.log( getHeroById(2) );

/*export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter((hero)=>hero.owner === owner);
    return heroesByOwner;
}*/

//Forma simplificada 
export const getHeroesByOwner=(owner: Owner):Hero[]=>heroes.filter((hero)=>hero.owner===owner);

console.log( getHeroesByOwner(Owner.DC));