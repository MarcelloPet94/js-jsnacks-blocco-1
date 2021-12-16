
// JSNACK 1

/*
Crea un array vuoto
chiedi all’utente un numero da inserire nell’array
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


let UserArr = [];

let cont = 0;

do {
const askuserArr = parseInt(prompt("Inserisci numero"));
cont += askuserArr;

} while(cont < 50)

document.write("Hai raggiunto 50");
*/

// JSNACK 2

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/

let userArrayGen = parseInt(prompt("Numero di Array")) - 1;

for (let i = 0; i <= userArrayGen; i++)
{
    let a = ['a','b','c'];
    document.write(a + '<br>');
}