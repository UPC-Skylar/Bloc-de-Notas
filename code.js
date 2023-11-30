let notas = {};
class Nota {
  constructor(titulo, ID, contenido, fechaCreacion) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.ID = ID;
    this.fechaCreacion = fechaCreacion;
  }
}

function crearNota(nombreNota, titulo, ID, contenido, fechaCreacion) {
  notas[nombreNota] = new Nota(titulo, ID, contenido, fechaCreacion);
}

function EditarNota(nombreNota) {
  while (true) {
    let eleccion = prompt(
      "¿Que deseas modificar?\n1.Titulo\n2.contenido\n3.Nada más"
    );
    if (eleccion === "1") {
      notas[nombreNota].titulo = prompt("¿Que nuevo titulo deseas poner?");
    } else if (eleccion == "2") {
      notas[nombreNota].contenido = prompt(
        "Ingresa el nuevo contenido que deseas colocar para tu nota"
      );
    } else {
      break;
    }
  }
  return;
}

function ConsultarNota(nombreNota) {
  return alert(`${[notas[nombreNota].titulo, notas[nombreNota].ID]}`);
}

function BorrarNota(nombreNota) {
  return delete notas[nombreNota];
}

function AccionARealizar() {
  while (true) {
    let accion = prompt(
      "Que accion desea realizar? \n1.CrearNota\n2.Editar Nota\n3.Consultar Nota\n4.Eliminar Nota\n5.Salir"
    );
    if (accion === "5") break;
    let nombreDeLaNota = prompt("¿Cual es el nombre de la nota");
    if (accion === "1") {
      let titulo = prompt("Ingrese el nombre del titulo");
      let ID = Math.random().toFixed(3) * 1000;
      let contenido = prompt("Ingrese el contenido de la nota");
      let fechaCreacion = prompt(
        "Ingrese la fecha de creacion de la nota. Debe tener el siguiente formato: DD-MM-YEAR"
      );

      crearNota(nombreDeLaNota, titulo, ID, contenido, fechaCreacion);
    }
    if (accion === "2") EditarNota(nombreDeLaNota);
    if (accion === "3") ConsultarNota(nombreDeLaNota);
    if (accion === "4") BorrarNota(nombreDeLaNota);
  }
  return;
}

AccionARealizar();
