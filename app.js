require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

//Funcion para ejecturar nuestra app
const main = async() => {
    mostrarMenu();
    pausa();
}

main();