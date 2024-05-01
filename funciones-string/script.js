// Aqui estamos imprimiendo en cosola la cantidad de caracteres que hay con la propiedad lenght

let nombre = "diego";
let apellido = "romero";
let nombreCompleto = nombre + apellido;
let longitud = nombreCompleto.length
console.log(longitud);



// con charAt nos devuelve la letra en la posicion que seleccionamos
let miName = "diegoR"
let cantidad = miName.charAt(1) // imprime i - la posicion 1 en miName
console.log(cantidad);


// subestring sirve para imprimir por pantalla la porcion que se requiere

let carro = "mazda";
let carroLogitud = carro.substring(0, 2);  //imprime por pantalla - ma
console.log(carroLogitud);


// indexof nos da la posicion en que inicia el string o en array imprime la posicion

let marca = "adidas, zapatilla";
let marcaIndex = marca.indexOf("zapatilla");

console.log(marcaIndex); //imprime 8


// replace nos permite reemplazar datos 

let saludando = "Hola! mundo";
let saludandoCambiar = saludando.replace("mundo", "diego romero");
console.log(saludandoCambiar);  //imprime por pantalla - Hola! diego romero


// toUpperCase y toLowerCase para convertir a mayusculas o minusculas los textos

let soldado = "romero mercado";
let soldadoMayus = soldado.toUpperCase();  //convirtiendo a mayusculas
let soldadoMinus = soldado.toLowerCase();  //convirtiendo a minusculas en caso que sea la variable en mayusculas
console.log(soldadoMayus);
console.log(soldadoMinus);


// Split se utiliza para dividir una cadena en un ARRAY y convertirlo a subcadena con un separador

let equipo = "Real madrid de españa";
let equipoSplit = equipo.split(" ");
console.log(equipoSplit);  // imprime en pantalla - {'real', 'madrid', 'de', 'españa'}


/* El metodo trim sirve para eliminar espacios en blanco al principio y final de una cadena
 Esto nos ayuda a que el codigo sea mejor y en los prompt del usuario eliminar espacios que deje */

let servicio = "   limpieza facial ";
let servicioTrim = servicio.trim();
console.log(servicioTrim);  //imprime en consola sin los espacios - limpieza facial

// slice es un metodo para extraer una seccion de una cadena, toma dos argumentos y la devuelve como cadena

let viaje = "tour en cartagena";
let viajeSubcadena = viaje.slice(-12);
console.log(viajeSubcadena);