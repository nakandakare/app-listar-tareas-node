//definimos las preguntas
const questions = {
  menu: {
    type: "list",
    name: "option",
    message: "Elija una opcion:",
    choices: [
      { value: "1", name: "Crear tarea" },
      { value: "2", name: "Listar tarea" },
      { value: "3", name: "Listar tareas completadas" },
      { value: "4", name: "Listar tareas pendientes" },
      { value: "5", name: "Completar tarea(s)" },
      { value: "6", name: "Borrar tarea" },
      { value: "0", name: "Salir".bgRed },
    ],
  },
  pause: {
    type: "input",
    name: "enter",
    message: "Presione ENTER para continuar".bgCyan,
  },
};

module.exports = questions;
