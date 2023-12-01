const readLine = require("readline"); //Lee la liberia llamada readline

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaDeNotas = [];

//CREATE
function crear() {
  rl.question("Escribe tu nota: ", function (nota) {
    listaDeNotas.push(nota);
    console.log("La nota fue agregada correctamente!");
    menu();
  });
}

//READ
function listar() {
  console.log("Este es tu listado de notas");
  listaDeNotas.forEach((element, index) => console.log(index + 1, element));
  menu();
}

//UPDATE
function editar() {
  rl.question("¿Qué nota deseas modificar?", function (numero) {
    rl.question("Escribe la nueva nota: ", function (nuevaNota) {
      listaDeNotas[numero - 1] = nuevaNota;
      console.log("Nota actualizada correctamente!");
      menu();
    });
  });
}
//DELETE
function borrar() {
  rl.question("¿Que nota deseas eliminar?", function (indice) {
    let nuevoListadoDeNotas = [];
    listaDeNotas.forEach((element, index) => {
      if (index !== indice - 1) nuevoListadoDeNotas.push(element);
    });
    listaDeNotas = nuevoListadoDeNotas;
    console.log("Nota borrada exitosamente!");
    menu();
  });
}

function menu() {
  console.log("¡Bienvenido a la aplicación de Notas!");
  console.log("Menú de usuario:");
  console.log(
    "Elige una opción:\n1.Crear una nota\n2.Ver las notas\n3.Editar una nota\n4.Eliminar una nota\n5.Cerrar el programa"
  );
  rl.question("Escribe el número elegido: ", function (num) {
    switch (num) {
      case "1":
        crear();
        break;
      case "2":
        listar();
        break;
      case "3":
        editar();
        break;
      case "4":
        borrar();
        break;
      case "5":
        console.log("Hasta luego!");
        rl.close();
      default:
        console.log("Error! Opción incorrecta");
        break;
    }
  });
}

menu();
