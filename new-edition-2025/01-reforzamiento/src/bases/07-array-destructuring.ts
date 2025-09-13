// La desestructuración de arreglos es similar a la de objetos,
// a diferencia para el arreglo se usa el simbolo []

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

//const [p1, p2, p3] = characterNames;
//console.log({p1, p2, p3});

//const [, p2] = characterNames;
//console.log({ p2 });

const [, , trunks] = characterNames;
console.log({ trunks }); 

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();
console.log({letters, numbers});


//Tarea:
const useState = (value: string) => {
    return[
        value,
        (newValue: string) => {
            console.log(newValue);
        }
    ] as const //Esto asegura que el primer valor será un string y el segundo será una función
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

