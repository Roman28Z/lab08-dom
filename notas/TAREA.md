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


- **Que agregue:** las clases `Tarea` y `ListaTareas`, y una función `mostrar()` que dibuja la lista a partir de los objetos.
- **Por que:** en la versión 2 los datos vivían en el HTML (clases CSS y texto de los li). Ahora los datos viven en objetos y el DOM solo los muestra.
- **Que cambio en el comportamiento:** nada a la vista del usuario; por dentro, el resumen sale de `tareas.total()` y `tareas.hechas()` y la validación del largo la hace `esValida()`.

## Donde uso DOM, eventos y objetos

| Pieza | Donde aparece en el codigo final | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | `document.querySelector`, `createElement`, `appendChild`, `replaceChildren`, `classList`, `textContent` dentro de `mostrar()` | Seleccionar elementos y dibujar la lista y el resumen en la página |
| Eventos | `input` en el campo de texto, `submit` en el formulario, `click` en cada tarea y en cada botón Borrar | Reaccionar a lo que hace el usuario sin recargar la página |
| Objetos | `new ListaTareas()`, `tareas.agregar(texto)`, `tarea.alternar()`, `tareas.eliminar(id)`, `candidata.esValida()` | Guardar los datos de las tareas y concentrar las reglas (marcar, borrar, contar, validar) |

## Pruebas realizadas

| Accion | Resultado esperado | Resultado obtenido | Cumple |
|--------|--------------------|--------------------|--------|
| Abrir la página | Se ven 3 tareas, la primera tachada, y "Tareas: 3 \| Hechas: 1" | Se ven 3 tareas, la primera tachada, y "Tareas: 3 \| Hechas: 1" | Sí |
| Escribir "Comprar pan" en el campo | El contador de caracteres muestra 11 | El contador muestra 11 | Sí |
| Enviar el formulario con el campo vacío | Mensaje rojo "Escribe una tarea antes de agregar" y no se agrega nada | Aparece el mensaje rojo y la lista no cambia | Sí |
| Enviar un texto de más de 40 caracteres | Mensaje rojo "La tarea no puede pasar de 40 caracteres" | Aparece el mensaje rojo y no se agrega | Sí |
| Enviar "Comprar pan" | La tarea aparece al final, mensaje verde y "Tareas: 4" | Aparece la tarea, el mensaje verde y "Tareas: 4 \| Hechas: 1" | Sí |
| Hacer clic en el texto de una tarea | Se tacha y "Hechas" sube en 1 | Se tacha y "Hechas" sube | Sí |
| Pulsar Borrar en una tarea | La tarea desaparece y "Tareas" baja en 1 | La tarea desaparece y el total baja | Sí |

## Por que disene asi mi clase

Diseñé `Tarea` con los atributos `id`, `texto` y `hecha` porque son los datos mínimos de una tarea: el `id` permite borrar la tarea correcta aunque haya textos repetidos, el `texto` es lo que ve el usuario y `hecha` guarda su estado sin depender del HTML. Sus métodos `alternar()` y `esValida()` reúnen las reglas propias de una tarea. `ListaTareas` guarda el arreglo `items` y un `siguienteId`, y sus métodos `agregar`, `eliminar`, `total` y `hechas` concentran las operaciones sobre el conjunto. Así, el código de eventos solo llama a estos métodos y `mostrar()` solo se encarga de dibujar.