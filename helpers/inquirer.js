require("colors");
const inquirer = require("inquirer");
const questions = require('./questions');

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

module.exports = {
  inquirerMenu,
  pausa
};
