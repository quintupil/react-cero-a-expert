// Desestructuración de Objetos: Es desarmar el objeto en variables independientes.
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
} 

/*const name = person.name;
const age = person.age;
const key = person.key;
console.log({name, age, key});*/

// El orden no importa con objetos. 
// ¡Importante! Para la destructuración de arreglo el orden si importa
//const {name, age, key} = person;
//const {key, name, age} = person;
//console.log({name, age, key});
const {key, name: ironManName} = person;
console.log({ironManName, key});

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ({name, age, key, rank}:Hero) => {
    return {
        keyName: key,
        user: {
            /**
             * TipPro: Cuando tienes una variable y quieres asignar el valor de otra variable 
             * y ambas variables tienen el mismo nombre, puedes ignorar la sintaxis "name: name"
             * y simplemente dejar name
             */
            name,
            age
        },
        rank: rank,
    }
};

const context = useContext( person );
console.log( context );
/*console.log(context.keyName);
console.log(context.user.name);
console.log(context.user.age)
console.log(context.rank);*/

const {
    rank,
    keyName,
    user
    /*user: {
        name,
        age
    }*/
} = useContext( person );
const {name, age} = user;

console.log({keyName, name, age, rank});