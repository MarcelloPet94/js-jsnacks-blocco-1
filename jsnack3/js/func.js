// JSNACK 3

/*
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

const equal = document.getElementById("equal");
const odd = document.getElementById("odd");

let titleEvent = document.createElement('h2');
let titleMess = document.createTextNode('ecco i pari');
titleEvent.appendChild(titleMess);
equal.append(titleEvent);

let titleE = document.createElement('h2');
let titleM = document.createTextNode('ecco i dispari');
titleE.appendChild(titleM);
odd.append(titleE);

let arEvenOdd = [];
let userSelectNumb = parseInt(prompt('Quanti numeri vuoi inserire?'));
let verifyInputUser = userSelectNumb <= 1;

// prende il numero dal prompt
//saranno il numero di elementi presenti dentro all'array
// cicla e push dentro all'array numeri casuali
for(let a = 0; a < userSelectNumb; a++) 

{
    let randA = Math.floor(Math.random()*100 + 1);
    arEvenOdd.push(randA);
}
console.log(arEvenOdd);

// legge e distingue i numeri dispari dai pari
for(let count = 0; count < arEvenOdd.length ; count++)


    {

        if(arEvenOdd[count] % 2 == 0) {

            if(verifyInputUser == true) {
                odd.remove();
            }

            let dinamicPar = document.createElement('p');
            let dinamicMess = document.createTextNode(arEvenOdd[count]);
            dinamicPar.appendChild(dinamicMess);
            equal.append(dinamicPar);


        }
        
        else {
            if(verifyInputUser == true) {
                equal.remove();
            }
            
            let dinamicPar = document.createElement('p');
            let dinamicMess = document.createTextNode(arEvenOdd[count]);
            dinamicPar.appendChild(dinamicMess);
            odd.append(dinamicPar);
        }

}

