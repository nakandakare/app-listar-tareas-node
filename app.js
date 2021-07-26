require("colors");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//Funcion para ejecturar nuestra app
const main = async () => {
  let userOption = "";
  const tareas = new Tareas();

  do {
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
        console.log(tareas._listado);
        break;
    }
    await pausa();
  } while (userOption !== "0");
};

main();
