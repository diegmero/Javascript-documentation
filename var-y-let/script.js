/* La diferencia es que var es global y podemos utilizarla en cualquier momento de nuestro proyecto 
y reasignar pues esto podria ocacionar errores- en cambio **Let** se puede utilizar en bloques y utilizar 
la misma variable en diferentes bloques sin ocacionar errores*/



// aqui esta devolviendo undefined e imprime en pantalla el string diego
function nombre(){
    console.log(name); //undefined
    var name = 'diego';  
    console.log(name);   //diego
}

//llamando a la funcion
nombre();



// aqui arroja un error en consola porque estamos imprimiendo primero la variable que aun no está definida
// y esto hace que controlemos los posibles errores en nuestros programas
function ejemplo(){
    console.log(nombre);
    let nombre = 'diego';
    console.log(nombre);
}
//llamando a la funcion por consola
ejemplo();