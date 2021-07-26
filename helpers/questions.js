//definimos las preguntas
const questions = {
  menu: {
    type: "list",
    name: "option",
    message: "Elija una opcion:",
    choices: [
      { value: "1", name: `${"1.".yellow} Crear tarea` },
      { value: "2", name: `${"2.".magenta} Listar tarea` },
      { value: "3", name: `${"3.".magenta} Listar tareas completadas` },
      { value: "4", name: `${"4.".magenta} Listar tareas pendientes` },
      { value: "5", name: `${"5.".cyan} Completar tarea(s)` },
      { value: "6", name: `${"6.".blue} Borrar tarea` },
      { value: "0", name: `${"0.".bgRed} ${"Salir".bgRed}\n` },
    ],
  },
  pause: {
    type: "input",
    name: "enter",
    message: "Presione ENTER para continuar".bgCyan,
  },
};

module.exports = questions;
