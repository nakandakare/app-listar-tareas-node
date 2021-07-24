require('colors');

//Es una funcion para mostrar el menu
const mostrarMenu = () => {
  console.clear();
  console.log("==============================".bgWhite);
  console.log("   Selecciones una opcion".rainbow.bold);
  console.log("==============================\n".bgWhite);

  console.log(`${'1.'.yellow} Crear tarea`);
  console.log(`${'2.'.magenta} Listar tarea`);
  console.log(`${'3.'.magenta} Listar tareas completadas`);
  console.log(`${'4.'.magenta} Listar tareas pendientes`);
  console.log(`${'5.'.cyan} Completar tarea(s)`);
  console.log(`${'6.'.blue} Borrar tarea`);
  console.log(`${'7.'.bgRed} ${'Salir'.bgRed}\n`);

  const rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });

  rl.question('Seleccione una opción: ', (option) => {
      if(option > 7 || option < 1) {
        console.log('opcion invalido, tiene que ser entre 1 y 7');
      }
      rl.close();
  });
};

//Funcion para pausar la consola
const pausa = () => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    rl.question('Presione ENTER para continuar'.bgCyan, (option) => {
        rl.close();
    });
};

//exportamos las funciones;
module.exports = {
  mostrarMenu,
  pausa,
};
