// aqui las operaciones se hahcen con operadores arimeticos

+ //operador de suma
- //operador de resta
'*' //operador de multiplicacion
/ //operador de division


/********  OPERADORES DE ASIGNACION   ************/

'*' //para asignar valor a una variable
'+=' //para sumar valor a la variable

let numero = 30;
numero += 5;
console.log(numero);  //imprime 35 por consola


/********  OPERADORES DE COMPARACION   ************/

'=='  //si el valor es igual imprime por pantalla true
'==='  //si es igual el valor y el tipo de dato devuelve true
'!='  //si el valor es diferente imprime por pantalla true
'<' //menor que
'>' //mayor que
'<=' //menor o igual que
'>=' //mayor o igual que


/********  CONCATENACION   ************/

// se utiliza el operador suma para concatenar juntar cadenas de texto

//tambien podemos utilizar concat para hacerlo

let saludo = "Hola, ";
let nombre1 = "diego,"
let saludar = saludo.concat(nombre1 + " tengo 25 años")  
console.log(saludar);  //imprime por consola "Hola, diego, tengo 25 años";