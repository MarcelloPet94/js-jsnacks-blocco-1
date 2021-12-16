// JSNACK 2

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/

let userArrayGen = parseInt(prompt("Numero di Array"));
let a = [];

document.write(
    `
    Stai stampando ${userArrayGen} Array: <br>
  
    `
);

for (let i = 0; i <= (userArrayGen - 1); i++)
{
    a = [];
    for(let c = 0; c < 10; c++) 
    {   
        
        let randA = Math.floor(Math.random()*100 + 1);
        a.push(randA);
        
    }
    document.write('Array ' + a + '<br>'); 

}