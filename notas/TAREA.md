# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas donde se pueden agregar, marcar como hechas y borrar tareas.

## Version 1: solo DOM

- **Que agregue:** la estructura HTML del componente y un código que crea con createElement un li por cada tarea de un arreglo, y muestra el total.
- **Por que:** para comprobar que puedo seleccionar elementos, crearlos y modificarlos antes de agregar interacción.
- **Que cambio en el comportamiento:** la página muestra tres tareas fijas y el total, pero no reacciona al usuario: el formulario y la lista no responden a nada.

## Version 2: con eventos

- **Que agregue:** tres eventos: `input` (contador de caracteres), `submit` (agregar tarea con validación) y `click` (marcar como hecha y borrar), además de la función `actualizarResumen`.
- **Por que:** para que la página reaccione al usuario sin recargarse y para validar lo que escribe con un mensaje visible en la página, no con alert.
- **Que cambio en el comportamiento:** ahora se pueden agregar tareas nuevas, marcarlas como hechas, borrarlas y ver el total y las hechas actualizados. Si el campo está vacío o pasa de 40 caracteres, aparece un mensaje en rojo.

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase