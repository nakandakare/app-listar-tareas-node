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

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
