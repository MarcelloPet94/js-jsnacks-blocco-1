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


let arEvenOdd = [23,12,78,47,15,24];
console.log(arEvenOdd);

for(let count = 0; count < arEvenOdd.length ; count++)

{

    if(arEvenOdd[count] % 2 == 0) {

        let dinamicPar = document.createElement('p');
        let dinamicMess = document.createTextNode(arEvenOdd[count]);
        dinamicPar.appendChild(dinamicMess);
        equal.append(dinamicPar);

    }
    
    else {
        let dinamicPar = document.createElement('p');
        let dinamicMess = document.createTextNode(arEvenOdd[count]);
        dinamicPar.appendChild(dinamicMess);
        odd.append(dinamicPar);
    }

}

