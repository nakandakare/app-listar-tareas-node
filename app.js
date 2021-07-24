require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

//Funcion para ejecturar nuestra app
const main = async() => {
    let option = '';
    do {
        //con await evitamos que se ejecute ambas funciones a la vez
        option = await mostrarMenu();
        console.log({ option });
        await pausa();
    } while( option !== '0');
}

main();