require("colors");
const inquirer = require("inquirer");
const questions = require("./questions");

const inquirerMenu = async () => {
  console.clear();
  console.log("==============================".bgWhite);
  console.log("   Selecciones una opcion".rainbow.bold);
  console.log("==============================\n".bgWhite);

  //retornamos un promp de tipo list
  return await inquirer.prompt(questions.menu);
};

const pausa = async () => {
  //retornamos un promp de tipo input
  await inquirer.prompt(questions.pause);
};

const leerInput = async (message = "") => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async( tareas = {} ) => {
    const choices = tareas.map((tarea, i) => {
      const index = `${i + 1}.`.green;

      return {
        value: tarea.id,
        name: `${index} ${ tarea.desc }`
      }
    })

    choices.unshift({
      value: '0',
      name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
      {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
      }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question);
  return ok;
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar
};
