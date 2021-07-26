require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

//Funcion para ejecturar nuestra app
const main = async () => {
  let userOption = "";
  do {
    //Instanciamos tarea y tareas;
    const tareas = new Tareas();
    const tarea = new Tarea("Comprar comida");
    //Guardamos un objeto en el _listado en el cual la key va a ser el id (uuid) y el value va a ser una tarea.
    tareas._listado[tarea.id] = tarea;
    //Demostración 
    console.log(tareas);

    const { option } = await inquirerMenu();
    userOption = option;
    await pausa();
  } while (userOption !== "0");
};

main();
