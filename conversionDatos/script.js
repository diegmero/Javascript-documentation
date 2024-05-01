// lo siguiente es un array de objetos y mostramos por pantalla el usuario 1 y 3


let contacts = [{                                          // esto es un array de objetos
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }, {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
    }]
    
    var usuario1 = contacts[0]; // asignando variable a posicion 0 del array
    var usuario3 = contacts[2]; // asignando variable a posicion 2
    console.log(usuario1, usuario3); //imprimiendo por consola la posicion 0 y 2
    var usuario2 = contacts[1];  //asignando la variable usuario2 a la segunda posicion del array de objetos
    console.log(contacts.length);  // muestra cuanto es la longitud del array de objetos
    console.log(contacts[3]);   //imprime por consola el ultimo objeto del array
    