const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  get listadoArr() {
    const lista = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      lista.push(tarea);
    });
    return lista;
  }
}

module.exports = Tareas;
