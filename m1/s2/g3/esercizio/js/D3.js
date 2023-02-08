/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let a = 8
let b = 10
if(a > b) {
let risposta = a
console.log(risposta)
}
else {
  let risposta = b
  console.log(risposta)
}
}
;
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let num = 9
if (num != 5){
  let risposta = "not equal"
  console.log(risposta)
} else {
  let risposta = "equal"
  console.log(risposta)
}
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let num = 10
let resto = num % 5
 if (resto == 0) {
  let risposta = "divisibile per 5"
  console.log(risposta)
} else {
  let risposta = "non divisibile per 5"
  console.log(risposta)
 }
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
let a = 9
let b = 17
if (a == 8 || b == 8){
  let risultato = "uno dei due valori è uguale a 8"
  console.log(risultato);
}
else if (a + b == 8){
  let risultato = "la somma di questi due numeri è uguale a 8"
  console.log(risultato);
}
else if (a - b == 8 || b - a == 8){
  let risultato = "la differenza di questi due numeri è uguale a 8"
  console.log(risultato);
}
else {
  let risultato = "non soddisfa nessuno dei requisiti"
  console.log(risultato);
}
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{ let totalShoppingCart = 49
  if (totalShoppingCart >= 50){
    let total = totalShoppingCart
    console.log(total)
  }
  else {
    let total = totalShoppingCart + 10
    console.log(total);
  }

}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{ 
  let product1 = 20
  let product2 = 5
  let product3 = 20
  
  let scontoProduct1 = product1 * 80 / 100
  let scontoProduct2 = product2 * 80 / 100
  let scontoProduct3 = product3 * 80 / 100
  console.log("totale carrello senza BF " + (product1 + product2 + product3))

  let totalShoppingCart = scontoProduct1 + scontoProduct2 + scontoProduct3
  console.log("totale carrello con BF "+ totalShoppingCart)
  if (totalShoppingCart >= 50){
    let total = totalShoppingCart
    console.log(total)
  }
  else {
    let total = totalShoppingCart + 10
    console.log(total);
  }

}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let a = 3
  let b = 1
  let c = 2
  let risultato;

  let inOrdine = [a,b,c];
        inOrdine.sort(function(a,b){
            return a - b;
        })
        console.log(inOrdine)
  
        //versione fatta da me
  if (a >= b && b >= c){
    risultato = c + " " + b + " " + a
  }

  else if (a <= b && b <= c){
    risultato = a + " " + b + " " + c
    }


  else if (a >= b && a <= c){
    risultato = b + " " + a + " " + c
    }


  else if (a >= c && b >= a){
    risultato = c + " " + a + " " + b
    }

  else if (a <= c && c <= b){
    risultato = a + " " + c + " " + b
    }

  else if (b <= c && c <= a){
    risultato = b + " " + c + " " + a
    }

  console.log(risultato)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let es8 = 9
  let dubbio = typeof es8
  if(dubbio == "number") {
    console.log("è un numero")
  }
  else {
    console.log("non è un numero");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num = 4
  let resto = num % 2
   if (resto == 0) {
    let risposta = "è pari"
    console.log(risposta)
  } else {
    let risposta = "è dispari"
    console.log(risposta)
   }
  }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 3
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


me.skills.splice(2)
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let arr = []
  {
  arr.push(1)
  arr.push(2)
  arr.push(3)
  arr.push(4)
  arr.push(5)
  arr.push(6)
  arr.push(7)
  arr.push(8)
  arr.push(9)
  arr.push(10)

  console.log(arr);}


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr.splice(-1)
arr.push(100)
console.log(arr);
}