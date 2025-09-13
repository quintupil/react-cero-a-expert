// <number> es un generico ¿?
const myPromise = new Promise<number>((resolve, reject) => {
    //Alguna tarea a ejecutar 
    let isCancelado: boolean = true;    
    setTimeout(()=>{
        // ¡Yo Quiero mi dinero !!!
        if (!isCancelado) {
            resolve(100);
        }else {
            reject('Mi amigo se hizo el weón!!!');
        }
        
        
    }, 2000);
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