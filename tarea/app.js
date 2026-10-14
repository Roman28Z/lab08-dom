// Version 1: solo DOM
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

const tareasIniciales = [
  "Estudiar JavaScript",
  "Hacer el laboratorio 08",
  "Subir cambios a GitHub"
];

tareasIniciales.forEach((texto) => {
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
});

resumen.textContent = "Tareas: " + tareasIniciales.length;
lista.firstElementChild.classList.add("hecha");