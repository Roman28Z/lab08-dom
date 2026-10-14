// Version 2: con eventos
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");
const formTarea = document.querySelector("#formTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");
const mensaje = document.querySelector("#mensaje");
const contadorCaracteres = document.querySelector("#contadorCaracteres");

function actualizarResumen() {
  const total = lista.children.length;
  const hechas = lista.querySelectorAll(".hecha").length;
  resumen.textContent = "Tareas: " + total + " | Hechas: " + hechas;
}

function crearTarea(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;
  span.addEventListener("click", () => {
    li.classList.toggle("hecha");
    actualizarResumen();
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => {
    li.remove();
    actualizarResumen();
  });

  li.appendChild(span);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(btnBorrar);
  lista.appendChild(li);
}

const tareasIniciales = [
  "Estudiar JavaScript",
  "Hacer el laboratorio 08",
  "Subir cambios a GitHub"
];
tareasIniciales.forEach(crearTarea);
lista.firstElementChild.classList.add("hecha");
actualizarResumen();

nuevaTarea.addEventListener("input", () => {
  contadorCaracteres.textContent = nuevaTarea.value.length;
});

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = nuevaTarea.value.trim();

  if (texto === "") {
    mensaje.textContent = "Escribe una tarea antes de agregar";
    mensaje.className = "error";
  } else if (texto.length > 40) {
    mensaje.textContent = "La tarea no puede pasar de 40 caracteres";
    mensaje.className = "error";
  } else {
    crearTarea(texto);
    actualizarResumen();
    mensaje.textContent = "Tarea agregada";
    mensaje.className = "ok";
    formTarea.reset();
    contadorCaracteres.textContent = 0;
  }
});