// esta es la practica que me ha puesto la plataforma de cisco

var ticket = {
    inicioEstacion: "villavicencio",
    finalEstacion: "bogota",
    precioTicket: "45.000"
};

console.log(`Usted va desde: ${ticket.inicioEstacion}`);
console.log(`Con destino a: ${ticket.finalEstacion}`);
console.log(`Precio del Tiquete: ${ticket.precioTicket}`);


// aqui estoy mostrando los datos personales mios en un objeto

var person = {
    name: "diego",
    latestName: "romero"
}

console.log(`su nombre es: ${person.name}`);
console.log(`su Apellido es: ${person.latestName}`);


// Practica sobre biblioteca de libros de javascript, se usará un array de objetos con 3 posiciones inicial

var biblioteca = [{

    titulo: "Hablando javascript",
    autor: "Axel Rauschmayer",
    numeroPaginas: 460
},
{
    titulo: "Programación de aplicaciones JavaScript",
    autor: "Eric Elliott",
    numeroPaginas: 254
},
{
    titulo: "Comprensión de ECMAScript 6",
    autor: "Nicholas C. Zakas",
    numeroPaginas: 352
},];


// Inccorporando un nuevo libro

biblioteca.push({
    titulo: "Learning JavaScript Design Patterns",
    autor: "de Addy Osmani",
    numeroPaginas: 254
});


console.log(biblioteca); //imprimiendo por consola totos los libros en total 4 posiciones
console.log(biblioteca.length); // longitud por consola total 4 
console.log(biblioteca[0].titulo);  //imprimiendo por consola el titulo del libro en posicion 0
console.log(biblioteca[1].titulo); //imprimiendo por consola el titulo del libro en posicion 1
console.log(biblioteca[2].titulo); //imprimiendo por consola el titulo del libro en posicion 2
console.log(biblioteca[3].titulo); //imprimiendo por consola el titulo del libro en posicion 3


// Con shift podemos eliminar el primer elemento de la lista 

biblioteca.shift(); // libro 1 en posicion 0 ha quedado eliminado
console.log(biblioteca); // imprimiendo el array de objetos para ver el resultado
console.log(biblioteca.length); //imprimiendo la longitud
console.log(biblioteca[0].titulo); // //imprimiendo por consola el titulo del libro en posicion 0 (actualizado)
console.log(biblioteca[1].titulo); //imprimiendo por consola el titulo del libro en posicion 1 (actualizado)
console.log(biblioteca[2].titulo); //imprimiendo por consola el titulo del libro en posicion 2 (actalizado)


// Aqui estoy declarando una variable y sumandole la cantidad de paginas de cada objeto
var suma = biblioteca[0].numeroPaginas + biblioteca[1].numeroPaginas + biblioteca[2].numeroPaginas;
console.log(`paginas en total: ${suma}`); 
/*aqui arriba imprimi la suma utilizando interpolacion de cadenas, el uso de comillas indica que
 se trata de una plantilla literal y es mejor que utilizar concatenacion con +, llamamos variables*/


 /** GRACIAS A CISCO Y SKILLS FOR ALL Y DIEGO ROMERO POR LA TEMATICA */