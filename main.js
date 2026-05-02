// INICIO DEL TALLER - BIBLIOTECA del barrio El Progreso

let continuar = true;

let biblioteca = {
  libros: [
    {
      titulo: "cien años de soledad",
      autor: "gabriel garcia marquez",
      año: 1967,
      categorias: ["novela", "realismo magico"],
      disponible: true
    },
    {
      titulo: "el principito",
      autor: "vladimir",
      año: 1943,
      categorias: ["infantil", "fantasia"],
      disponible: true
    },
    {
      titulo: "1984",
      autor: "george orwell",
      año: 1949,
      categorias: ["distopia", "politica"],
      disponible: true
    }
  ],
  usuarios: [
    { nombre: "tina", correo: "tinagarcia@gmail.com" },
    { nombre: "fabian", correo: "fabian@gmail.com" },
    { nombre: "vladimir", correo: "vladimir@gmail.com" }
  ]
};

function registrarUsuario() {
  let nombre = prompt("Ingrese el nombre del usuario: ");
  let correo = prompt("Ingrese el correo electrónico del usuario: ");

  biblioteca.usuarios.push({
    nombre: nombre,
    correo: correo
  });

  console.log(`\nUsuario ${nombre} registrado exitosamente.`);
}

function mostrarUsuarios() {
  console.log("\n--- Lista de Usuarios ---");
  if (biblioteca.usuarios.length === 0) {
    console.log("No hay usuarios registrados.");
  } else {
    biblioteca.usuarios.forEach((usuario, index) => {
      console.log(`${index + 1}. Nombre: ${usuario.nombre} | Correo: ${usuario.correo}`);
    });
  }
  console.log("---------------------------");
}


function mostrarLibros() {
  console.log("\nLista de libros:");
  biblioteca.libros.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} - ${libro.año}`);
    console.log(`Categorías: ${libro.categorias.join(", ")}`);
    console.log(`Disponible: ${libro.disponible}`);
    console.log("----------------------");
  });
}

function agregarLibro() {
  let titulo = prompt("Ingrese el título: ");
  let autor = prompt("Ingrese el autor: ");
  let año = parseInt(prompt("Ingrese el año: "));
  let categoriasInput = prompt("Ingrese categorías separadas por coma: ");
  let categorias = categoriasInput ? categoriasInput.split(",").map(c => c.trim()) : [];

  biblioteca.libros.push({
    titulo: titulo,
    autor: autor,
    año: año,
    categorias: categorias,
    disponible: true
  });

  console.log("Libro agregado exitosamente.");
}

function filtrarPorCategoria() {
  let categoriaBuscar = prompt("Ingrese la categoría a buscar: ");

  let filtrados = biblioteca.libros.filter(libro =>
    libro.categorias.includes(categoriaBuscar.toLowerCase())
  );

  if (filtrados.length === 0) {
    console.log("No se encontraron libros con esa categoría.");
  } else {
    filtrados.forEach(libro => {
      console.log(`${libro.titulo} - ${libro.autor}`);
      console.log(`${libro.año} - Categorías: ${libro.categorias.join(", ")}`);
    });
  }
}

function cambiarDisponibilidad() {
  let tituloBuscar = prompt("Ingrese el título del libro: ");

  let libro = biblioteca.libros.find(l => l.titulo.toLowerCase() === tituloBuscar.toLowerCase());

  if (!libro) {
    console.log("Libro no encontrado.");
  } else {
    libro.disponible = !libro.disponible;
    console.log(`Estado actualizado. Disponible: ${libro.disponible}`);
  }
}

function borrarLibro() {
  let titulo = prompt("Digita el título del libro a eliminar: ").toLowerCase();
  let indice = biblioteca.libros.findIndex(libro =>
    libro.titulo.toLowerCase() === titulo
  );
  
  if (indice !== -1) {
    biblioteca.libros.splice(indice, 1);
    console.log("Libro eliminado.");
  } else {
    console.log("Libro no encontrado.");
  }
  
  console.log("Libros restantes:");
  biblioteca.libros.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo}
    Autor: ${libro.autor}
    Año: ${libro.año}
    Categorías: ${libro.categorias.join(", ")}
    -------------------------`);
  });
}

function salir() {
  console.log("Saliendo del programa. ¡Hasta luego!");
  continuar = false;
}


function menu() {
  console.log("\n--- MENÚ ---");
  console.log("1. Mostrar libros");
  console.log("2. Agregar libro");
  console.log("3. Filtrar por categoría");
  console.log("4. Cambiar disponibilidad");
  console.log("5. Borrar libro");
  console.log("6. Registrar usuario");
  console.log("7. Mostrar usuarios");
  console.log("8. Salir");

  let opcion = prompt("Elige una opción: ");

  switch (opcion) {
    case "1":
      mostrarLibros();
      break;

    case "2":
      agregarLibro();
      break;

    case "3":
      filtrarPorCategoria();
      break;

    case "4":
      cambiarDisponibilidad();
      break;
      
    case "5":
      borrarLibro();
      break;
      
    case "6":
      registrarUsuario();
      break;

    case "7":
      mostrarUsuarios();
      break;

    case "8":
      salir();
      break; 

    default:
      console.log("Opción no válida. Por favor, intenta de nuevo.");
  }
}



while (continuar) {
  menu();
}
