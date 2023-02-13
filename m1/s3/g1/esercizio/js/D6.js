/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2) {
    var area = l1*l2
    console.log(area)
}
area(8,6)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1,n2){
    if (n1 === n2) {
       let sommapertre = (n1 + n2) * 3
       console.log(sommapertre)
    }
    else {
        let somma = n1 + n2
        console.log(somma);
    }
}

crazySum(3,4)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (n1) {
    if( n1 > 19) {
        let differenzaCrazy = Math.abs((n1 - 19) * 3)
        console.log(differenzaCrazy);
    }
    else {
        let differenza = Math.abs(n1 - 19)
        console.log(differenza);
    }
    
}
crazyDiff(3)
crazyDiff(25)
 
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ( n >= 20 & n <= 100 || n == 400){
     return true
    }
    else {
        return false
    }


}
console.log(boundary(20))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
    if (string === "EPICODE") {
        return string
    }
    else {
        return "EPICODE " + string 
    }
}
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if (n%3 == 0 || n%7 == 0) {
        return true
    }
    else {
        return false;
    }
}
console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (string) {
    let splittate = string.split("");
    let inverse = splittate.reverse();
    return inverse.join(""); 
}
console.log(reverseString("ciao"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// ci siamo fatti dare un piccolo aiutino
function upperFirst(string) {
    return string.split(" ").map(function(parola) {
      return parola.charAt(0).toUpperCase() + parola.slice(1);
    }).join(" ");
  }
  console.log(upperFirst("ciao come stai"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string) {
        return string.slice(1,-1)
}
console.log(cutString("ciao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let rand = [];
    for (let i = 0; i < n; i++) {
      rand.push(Math.floor(Math.random() * 11));
    }
    return rand;
  }

  console.log(giveMeRandom(9)); 
  