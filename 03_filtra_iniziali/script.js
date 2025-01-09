/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraIniziali(nuovoArray, lettera){
    let iniziali = [];
    for (let i = 0; i < nuovoArray.length; i++){
        if (nuovoArray[i][0] === lettera){
            iniziali.push(nuovoArray[i]);
        }
    }
    return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filtraIniziali(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]