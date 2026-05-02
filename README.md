# Biblioteca del Barrio El Progreso

Sistema sencillo de gestión de biblioteca en JavaScript. Permite administrar libros y usuarios desde una interfaz de menú por consola.

## ¿Qué hace?

El programa muestra un menú interactivo donde el usuario puede realizar las siguientes acciones:

1. Mostrar libros: lista todos los libros con su título, autor, año, categorías y disponibilidad.
2. Agregar libro: registra un libro nuevo solicitando sus datos al usuario.
3. Filtrar por categoría: muestra solo los libros que pertenecen a una categoría específica.
4. Cambiar disponibilidad: marca un libro como prestado o lo regresa a disponible.
5. Borrar libro: elimina un libro del catálogo a partir de su título.
6. Registrar usuario: agrega un usuario nuevo con nombre y correo electrónico.
7. Mostrar usuarios: lista los usuarios registrados en la biblioteca.
8. Salir: termina la ejecución del programa.

## Datos iniciales

La biblioteca arranca con tres libros precargados (Cien años de soledad, El principito y 1984) y tres usuarios de ejemplo (Tina, Fabián y Vladimir). El usuario puede ir agregando, modificando o eliminando información a medida que usa el menú.

## Estructura general

El sistema mantiene toda la información en un único objeto llamado biblioteca, que contiene una lista de libros y una lista de usuarios. Cada libro guarda su título, autor, año, categorías y si está disponible. Cada usuario guarda su nombre y correo.

## Cómo ejecutar

Como el programa utiliza la función prompt para pedir datos al usuario, la forma más sencilla de probarlo es abriéndolo desde un navegador a través de un archivo HTML que cargue main.js. Las respuestas y mensajes del programa se muestran en la consola del navegador.

También se puede ejecutar en Node.js, pero en ese caso se necesita instalar una librería que reemplace la función prompt, ya que Node no la incluye por defecto.

## Archivos del proyecto

- main.js: programa principal con el menú y todas las funciones de gestión.
- prestamos.js: lógica relacionada con préstamos y devoluciones.
- README.md: este documento.

## INTEGRANTES: 
-Valentina García Pizón
-Vladirmir Celis Almeyda
-Fabián Rojas Delgado