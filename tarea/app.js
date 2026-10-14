// Version 3: con clases y objetos
class Tarea {
  constructor(id, texto) {
    this.id = id;
    this.texto = texto;
    this.hecha = false;
  }

  alternar() {
    this.hecha = !this.hecha;
  }

  esValida() {
    return this.texto.length > 0 && this.texto.length <= 40;
  }
}

class ListaTareas {
  constructor() {
    this.items = [];
    this.siguienteId = 1;
  }

  agregar(texto) {
    const tarea = new Tarea(this.siguienteId, texto);
    this.siguienteId = this.siguienteId + 1;
    this.items.push(tarea);
    return tarea;
  }

  eliminar(id) {
    this.items = this.items.filter((t) => t.id !== id);
  }

  buscar(id) {
    return this.items.find((t) => t.id === id);
  }

  total() {
    return this.items.length;
  }

  hechas() {
    return this.items.filter((t) => t.hecha).length;
  }
}

const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");
const formTarea = document.querySelector("#formTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");
const mensaje = document.querySelector("#mensaje");
const contadorCaracteres = document.querySelector("#contadorCaracteres");

const tareas = new ListaTareas();

function mostrar() {
  lista.replaceChildren();

  tareas.items.forEach((tarea) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarea.texto;
    if (tarea.hecha) {
      li.classList.add("hecha");
    }
    span.addEventListener("click", () => {
      tarea.alternar();
      mostrar();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      tareas.eliminar(tarea.id);
      mostrar();
    });

    li.appendChild(span);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(btnBorrar);
    lista.appendChild(li);
  });

  resumen.textContent = "Tareas: " + tareas.total() + " | Hechas: " + tareas.hechas();
}

["Estudiar JavaScript", "Hacer el laboratorio 08", "Subir cambios a GitHub"].forEach((texto) => {
  tareas.agregar(texto);
});
tareas.items[0].alternar();
mostrar();

nuevaTarea.addEventListener("input", () => {
  contadorCaracteres.textContent = nuevaTarea.value.length;
});

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = nuevaTarea.value.trim();
  const candidata = new Tarea(0, texto);

  if (texto === "") {
    mensaje.textContent = "Escribe una tarea antes de agregar";
    mensaje.className = "error";
  } else if (!candidata.esValida()) {
    mensaje.textContent = "La tarea no puede pasar de 40 caracteres";
    mensaje.className = "error";
  } else {
    tareas.agregar(texto);
    mostrar();
    mensaje.textContent = "Tarea agregada";
    mensaje.className = "ok";
    formTarea.reset();
    contadorCaracteres.textContent = 0;
  }
});