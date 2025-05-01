//17. Objetos Literales
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
};
//console.log(persona);
//console.table(persona);
//console.log({ persona: persona });

//No se recomienda hacer esto, porque apunta a la misma dirección de memoria
//const persona2 = persona;

//Copia de persona en persona2 sin apuntar a la misma dirección de memoria, es decir, sin modificar persona
// Using the spread operator "..." to create a shallow copy of the persona object
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
