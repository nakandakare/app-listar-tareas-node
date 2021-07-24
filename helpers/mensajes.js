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
};

module.exports = {
  mostrarMenu,
};
