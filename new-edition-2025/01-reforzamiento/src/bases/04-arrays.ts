//const myArray: number[]  = [1, 2, 3, 4, 5, 6];
const myArray: (number | string)[]  = [1, 2, 3, 4, 5, 6];

//myArray.push(10);
myArray.push(+'10'); //El operador unario (+) convierte el string a number
myArray.push('7');
myArray.push('Ocho');

//const myArray2 = myArray;
const myArray2 = [...myArray];//Rompe la referencia a primer nivel
myArray2.push(7);

console.log({myArray, myArray2});

/*for (const myNumber of myArray) {
    console.log(myNumber + 10);
}*/