function greet(name: string): string {
    return `Hola, ${name}`;
}

//Arrown function
const greetV2 = (name: string): string => `Hola, ${name}`;  


const message = greet('Charly ');
const message2 = greetV2('Charly (Arrow)');
console.log({ message, message2 });


function getUser() {
    return {
        uid: '123AWS',
        username: 'Charly'  
    }
}


const getUser2 = () => {
    return {
        uid: '123abs',
        username: 'China'  
    }
}

const user = getUser();
const user2 = getUser2();

console.log({user, user2});

