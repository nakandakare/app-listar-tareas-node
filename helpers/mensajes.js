require("colors");

//Es una funcion para mostrar el menu
const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("==============================".bgWhite);
    console.log("   Selecciones una opcion".rainbow.bold);
    console.log("==============================\n".bgWhite);

    console.log(`${"1.".yellow} Crear tarea`);
    console.log(`${"2.".magenta} Listar tarea`);
    console.log(`${"3.".magenta} Listar tareas completadas`);
    console.log(`${"4.".magenta} Listar tareas pendientes`);
    console.log(`${"5.".cyan} Completar tarea(s)`);
    console.log(`${"6.".blue} Borrar tarea`);
    console.log(`${"0.".bgRed} ${"Salir".bgRed}\n`);

    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Seleccione una opción: ", (option) => {
      if (option > 6 || option < 0) {
        reject("opcion invalido, tiene que ser entre 0 y 6");
      }
      resolve(option);
      rl.close();
    });
  });
};

//Funcion para pausar la consola
const pausa = () => {
  return new Promise((resolve) => {
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Presione ENTER para continuar".bgCyan, (_option) => {
      rl.close();
      resolve();
    });
  });
};

//exportamos las funciones;
module.exports = {
  mostrarMenu,
  pausa,
};
