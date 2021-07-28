const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const { completadoEn, desc } = tarea;
      const numero = index + 1;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${numero} ${desc} :: ${estado}`);
    });
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
