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


