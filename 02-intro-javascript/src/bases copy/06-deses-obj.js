// 20. Desestructuracion de objetos
// Asignación desestructurante o destructuring

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  //rango: "Soldado", //Habilitar para probar en paso 5.1, este valor remplazará el valor por defecto de la propiedad rango en la función retornaPersona
};

//Paso 1:
//Extrae las propiedades del objeto persona y las asigna a las variables nombre, edad y clave
/*
const { nombre, edad, clave } = persona;
console.log(nombre, edad, clave);
*/

//Paso 2: En el caso que ya este utilizando una variable para el nombre ejemplo nombre2, se puede asignar el valor de la propiedad nombre del objeto persona a la variable nombre2
/*
const { nombre: nombre2 } = persona;
console.log(nombre2);
*/

//Paso3:
// Nota: Tener precaución que la constante nombre no estará disponible en el scope global, el código va a dar un error. 'nombre' is not defined
/*
const { nombre: nombre2 } = persona;
console.log(nombre);
*/

//Paso 4:
/*
const retornaPersona = (usuario) => {
  console.log(usuario);
};
*/

/*
const retornaPersona = (usuario) => {
  const { nombre, edad, clave } = usuario;
  console.log(nombre, edad, clave);
};
*/

//Paso 5:
//Desestructuración en el argumento de la función
/*
const retornaPersona = ({ nombre, edad, clave }) => {
  console.log(nombre, edad, clave);
};
*/

/*
const retornaPersona = ({ nombre:nombre2, edad, clave }) => {
    console.log(nombre2, edad, clave);
};
*/

/*
const retornaPersona = ({ nombre, edad, clave, rango }) => {
  console.log(nombre, edad, clave, rango); //rango is undefined because it is not defined in the object persona
};
*/

//Paso 5.1
//Podemos asignar un valor por defecto a la propiedad rango en caso que no exista en el objeto persona
//Ahora si existe la propiedad rango en el objeto persona se va a imprimir el valor de la propiedad rango del objeto persona
/*
const retornaPersona = ({ nombre, edad, clave, rango = "Capitán" }) => {
  console.log(nombre, edad, clave, rango); //rango is undefined because it is not defined in the object persona
};
*/

//retornaPersona(persona);

//Paso 6:
/*
const retornaPersona = ({ nombre, edad, clave, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const avenger = retornaPersona(persona);
console.log(avenger);
*/

/*
const getUseContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const avenger = getUseContext(persona);
console.log(avenger);
*/

/*
const getUseContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const { nombreClave, anios } = getUseContext(persona);
console.log(nombreClave, anios);
*/

//Paso 7:
//Desestructuración anidada
/*
const getUseContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

///Desestructurar un objeto anidado latlng, de esta forma no es muy común hacerlo de esta forma
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = getUseContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
*/

const getUseContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
const { nombreClave, anios, latlng } = getUseContext(persona);
const { lat, lng } = latlng; ///Desestructuración anidada, es más común codificarlo de esta forma
console.log(nombreClave, anios);
console.log(lat, lng);
