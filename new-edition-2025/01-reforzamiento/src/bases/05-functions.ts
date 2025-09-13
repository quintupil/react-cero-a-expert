function greet(name: string): string {
    return `Hola, ${name}`;
}

//Arrown function
//greet2 es una variable que apunta a una direccion de memoria donde se encuentra la funcion
//Beneficio no cambia a lo que apunta el objeto
/*const greet2 = (name: string): string => {
    return `Hola, ${name}`;
}*/
//Arrown function simplificado
const greet2 = (name: string): string => `Hola, ${name}`;  

const message = greet('Charly ');
const message2 = greet2('Charly (Arrow)');
console.log({ message, message2 });

interface User {
    uid: string,
    username: string
}

//El retorno de la funcion luce como la interfaz User
function getUser(): User {
    return {
        uid: '123AWS',
        username: 'Charly'  
    }
}

/*const getUser2 = () => {
    return {
        uid: '123abs',
        username: 'Reni'  
    }
}*/

//Forma simplificada
//Los parentesis despues del simbolo "=>" significa que es un retorno implicito
const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'El_Papi23',
})

const user = getUser();
const user2 = getUser2();

console.log({user, user2});

const myNumbers: number[] = [1,2,3,4,5];

/*myNumbers.forEach( function(value){
    console.log({value});
});*/

/*myNumbers.forEach( (value) => {
    console.log({value});
});*/

//Esto es valido porque los argumentos que recibe la function callbackfn,
//pasan directamente y en el mismo orden a la función log
myNumbers.forEach( console.log );
