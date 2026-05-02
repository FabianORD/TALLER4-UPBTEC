function cambiarDisponibilidad() {
  let tituloBuscar = prompt("ingrese el titulo del libro: ");

  let libro = biblioteca.libros.find(l => l.titulo === tituloBuscar);

  if (!libro) {
    console.log("libro no encontrado");
  } else {
    libro.disponible = !libro.disponible;
    console.log("estado actualizado");
  }
}