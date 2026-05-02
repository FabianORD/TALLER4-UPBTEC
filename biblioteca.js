let continuar = true;
let usuarios = [
  {nombre: "tina", correo: "tinagarcia@gmail.com"},
  {nombre: "fabian", correo: "fabian@gmail.com"},
  {nombre: "vladimir", correo: "vladimir@gmail.com"}
]
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
  ]
};

// funciones
function mostrarLibros() {
  console.log("\nlista de libros:");
  biblioteca.libros.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} - ${libro.año}`);
    console.log(`categorias: ${libro.categorias.join(", ")}`);
    console.log(`disponible: ${libro.disponible}`);
    console.log("----------------------");
  });
}


function agregarLibro() {
  let titulo = prompt("ingrese el titulo: ");
  let autor = prompt("ingrese el autor: ");
  let año = parseInt(prompt("ingrese el año: "));
  let categorias = prompt("ingrese categorias separadas por coma: ").split(",");

  biblioteca.libros.push({
    titulo: titulo,
    autor: autor,
    año: año,
    categorias: categorias,
    disponible: true
  });

  console.log("libro agregado");
}
