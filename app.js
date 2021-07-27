require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//Funcion para ejecturar nuestra app
const main = async () => {
  let userOption = "";
  const tareas = new Tareas();

  //leemos el archivo de la bd.
  const bdData = leerDB();
  console.log(bdData);
  await pausa();

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
        console.log(tareas.listadoArr);
        break;
    }
    
    //guardamos al .txt 
    guardarDB(tareas.listadoArr);

    //pausar menu
    await pausa();
  } while (userOption !== "0");
};

main();
