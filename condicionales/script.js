/***********  CONDICIONALES   ************/

/* Son estructuras de control de flujo para que el programa tome decisiones, ya sea por una condicion 
 o por multiples condiciones */

 let numero = 5;

 if (numero > 0){
    console.log("El numero es mayor que cero");  //imprime por pantalla que es mayor que cero
 }

 // CONDICIONAL CON IF ELSE

 let num = -8;
 if (num > 0){
    console.log("El numero es mayor a cero");
 }else{
    console.log("El numero es menor que cero"); // cumple esta condicion porque es menor que cero
 }


// EVALUANDO MULTIPLES CONDICIONES CON IF ELSE

let edad = 28;

if (edad === 18){
    console.log("Inicias la mayoria de edad puedes entrar");
}else if (edad > 18 ){
    console.log("Puedes ingresar sin problema");  // en este ejemplo este seria la condicion que cumple con if
}else{
    console.log("lo siento no puedes entrar");
}




/******************    SWITCH  ****************************/

/* Switch es una estructura de control que se utiliza para evaluar una expresion y ejecutar bloques
de codigo según sea la expresion por ejemplo nos va a servir para hacer un menu */

