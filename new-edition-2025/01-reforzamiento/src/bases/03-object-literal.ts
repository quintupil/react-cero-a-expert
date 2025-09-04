interface Person {
    firstName: string;
    lastName: string; 
    age: number;
    address?: Address; //? Propiedad opcional
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',  
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
};

const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 21,
};

console.log({ironman, spiderman});

//Esto no genera un clone del objeto, si no que crea una referencia al mismo espacio de memoria (dirección de memoria)
//const spiderman = ironman;

//Simbolo Spreed (...) :- Toma las propiedades del objeto ironman y las asigna a un nuevo objeto (spiderman). Rompe la referencia a primer nivel
//const spiderman = {...ironman};

/* Important!!! 
const spiderman = structuredClone(ironman); //Clonación profunda (deep clone)
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 21;        
*/

//console.log(ironman, spiderman);