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
  usuarios: [] // Registro de usuarios añadido
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