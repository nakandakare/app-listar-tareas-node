require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//Funcion para ejecturar nuestra app
const main = async () => {
  let userOption = "";
  const tareas = new Tareas();

  //cargamos el archivo de la bd a las tareas.
  const bdData = leerDB();
  if (bdData) {
    tareas.cargarTareasFromArray(bdData);
  }

  do {
    //mostramos el menu
    const { option } = await inquirerMenu();
    userOption = option;

    switch (option) {
      case "1":
        //crear tarea
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        //listar tareas
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if( id !== '0') {
          const ok = await confirmar('Borrar esta tarea?');
          if (ok) {
            tareas.borrarTarea(id);
          }
        } 
        break;
    }

    //guardamos al .txt
    guardarDB(tareas.listadoArr);

    //pausar menu
    await pausa();
  } while (userOption !== "0");
};

main();
