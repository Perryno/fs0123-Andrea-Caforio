/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoDatatype = 'stringa'
primoDatatype = 'stringa: la variabile stringa viene rilevata come un testo, può comprendere anche dei numeri ma questi verranno rilevati come testo'

let secondoDatatype = 10
secondoDatatype = 'number: le variabili number possono contenere solo numeri'

let terzoDatatype = true 

terzoDatatype = 'boolean: le variabili boolean possono contenere solo "true" o "false" che stanno rispettivamente per vero e falso'


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = 'Andrea'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12
let numero2 = 20 

console.log(12+20)
console.log(numero1+numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nome = 'Andrea'
{name = 'Caforio'} 
//const nome = 'Perry';  
//"Uncaught SyntaxError: Identifier 'nome' has already been declared"
/* 
ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon"
let name2 = "Jhon"
let ciao = console.log(name1 != name2);

if (name1 != name2){
let risultato = "è diverso"
console.log(risultato);
}

let name1l = name1.toLowerCase()
let name2l = name2.toLowerCase()

console.log(name2l)

if (name1l != name2l){
  let risultato = "è diverso"
  console.log(risultato);
  } else {
    let risultato = "è uguale"
    console.log(risultato);  }

    let risultato = name1l != name2l ? 'è diverso' : 'è uguale';
    console.log(risultato)


