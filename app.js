require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
//console.clear();

//Funcion para ejecturar nuestra app
const main = async() => {
    let userOption = '';
    do {
        //con await evitamos que se ejecute ambas funciones (menu y pausa) a la vez
        const { option } = await inquirerMenu();
        userOption = option;
        await pausa();
    } while( userOption !== '0');
}

main();