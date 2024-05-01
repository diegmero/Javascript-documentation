let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
//estoy agregando un dia mas al array incial
diasSemana.push('enero')
console.log(diasSemana)


/*Aqui estamos  imprimiendo en pantalla el tercer dia de la semana
  recordar todos los indices inician en 0
*/

let tercerDia = diasSemana[2];
console.log(tercerDia);


// metodos utilies para el procesamiento de datos

console.log(diasSemana.length)

diasSemana.shift();
console.log(diasSemana);


// aqui estoy utilizando la funcion concat para agregar mas dias en otro array a la variable inicial

let masDias = ['hoy', 'mañana'];
let todo = diasSemana.concat(masDias);
console.log(todo);



// aqui estoy creando un array con el metodo JOIN para que imprima en pantalla el array separado por '-'
let numeros = [1,2,3.5,3,4,5]

let algunDia = numeros.join('-');
console.log(algunDia);


// este metodo sort lo que hace es ordenarme los elementos del Array
numeros.sort();
console.log(numeros);


// y aqui me está devolviendo todos los elementos del array al reves
numeros.reverse();
console.log(numeros);