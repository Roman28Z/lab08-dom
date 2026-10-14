# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El título cambió a "Hola desde la consola" | No |
| textContent desde app.js | El título cambió a "Hola TECSUP" | Si |
| style.color | El título se puso de color azul | Si |
| classList.add | El párrafo quedó con fondo amarillo (clase destacado) | Si |
| createElement + appendChild | La lista mostró un tercer elemento: JavaScript | Si |
 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic sobre el botón Sumar 1 | 1 |
| dblclick | Un doble clic sobre el botón | 1 por cada doble clic |
| mouseover | Pasar el cursor sobre el botón, sin hacer clic | 1 cada vez que el cursor entra al botón |

Con el evento click, evento.type mostró "click" en la consola.
evento.target mostró el elemento que recibió el evento: el botón Sumar 1.
 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo "Hola, ..." cambió letra por letra mientras escribía | No |
| Enviar sin preventDefault | El mensaje "Enviado" apareció un instante y desapareció; el campo quedó vacío | Si |
| Enviar con preventDefault, correo sin @ | Apareció "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Apareció "Enviado: " seguido del correo | No |
 
## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |

Ventaja 1: la clase define una sola vez los atributos y métodos, y cada producto nuevo se crea con una línea (new Producto).
Ventaja 2: la lista de la página se genera con un solo ciclo, así que agregar un producto no obliga a editar el HTML.
 
## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | No muestra total; el producto no aparece y la consola da error: this.precio.toFixed is not a function | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | listaCarrito.appendChild(li) y total.textContent = ... | Mostrar en la página el producto agregado y el total |
| Evento | formProducto.addEventListener("submit", ...) | Reaccionar cuando el usuario envía el formulario |
| Objeto | const producto = new Producto(...) y const carrito = new Carrito() | Guardar los datos del producto y calcular el total del carrito |