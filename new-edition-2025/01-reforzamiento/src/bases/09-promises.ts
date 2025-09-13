// <number> es un generico ¿?
const myPromise = new Promise<number>((resolve, reject) => {
    //Alguna tarea a ejecutar 
    setTimeout(()=>{
        // ¡Yo Quiero mi dinero !!!
        resolve(100);
        //reject('Mi amigo se hizo el weón!!!');
    }, 5000);
});

myPromise
    .then((myMoney) => {
        console.log(`Tengo mi dinero $${myMoney}`);            
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(()=>{
        console.log('Pues a seguir con mi vida ... ');
    });