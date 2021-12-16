/*
Crea un array vuoto
chiedi all’utente un numero da inserire nell’array
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// JSNACK 1

let UserArr = [];

let cont = 0;

do {
const askuserArr = parseInt(prompt("Inserisci numero"));
cont += askuserArr;

} while(cont < 50)

document.write("Hai raggiunto 50");