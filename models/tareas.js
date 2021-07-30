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

  //Implemento esta funcion para reutilizarlo en listadoCompleto() y listarPendientesCompletadas() asi puedo evitar reescribir el codigo
  formatearTarea(tarea, i) {
    const indice = `${i + 1}.`.green;
    const estado = tarea.completadoEn ? "Completada".green : "Pendiente".red;
    return `${indice} ${tarea.desc} :: ${estado}`;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const { completadoEn, desc } = tarea;
      const numero = index + 1;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${numero} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    const list = this.listadoArr.filter((tarea) =>
      completadas ? tarea.completadoEn : !tarea.completadoEn
    );
    list.forEach((tarea, i) => console.log(this.formatearTarea(tarea, i)));
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
