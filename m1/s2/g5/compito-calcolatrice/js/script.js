/* Volevo prima nascondere i simboli dal display ma non ci sono riuscito,
ho provato anche a fare un secondo display nascosto dove sarebbero avvenuti i calcoli
e uno che filtrava i simboli ma sembrava troppo confusionario, i simboli erano invisibili,
e se li premevi più di una volta non capivi cosa stavi facendo.
Quindi ho deciso di applicare le mie conoscenze di javascript su orario e i comandi come 
% e la funzione per il quadrato di un numero 
.*/

function aggiungi(dato) {
    let symbol = dato.getAttribute('data-symbol') ;
    
    let display = document.querySelector('#Display');
    display.value += symbol;
}

/* 
Volevo fare un meccanismo seconso quale: mettendo due volte alla fine del 
numero il segno * o / avrebbe dato rispettivamente il quadrato o la racice quadrata

{
let display = document.querySelector('#Display')
let valore = display.value 
console.log(display.value)
let stringa = String(display.value)
let len = stringa.length
let perper = stringa.substring(-2)
console.log(perper)*/

function total(){
    /* 
    if*(perper == **) {

         let display = document.querySelector('#Display');
         let rimossi = valore.slice (0,-2)
       display.value = eval(rimossi * rimossi)
    
    } else {
    */ 
       let display = document.querySelector('#Display');
       display.value = eval(display.value)  //}
    
}



function canc() {
    let display = document.querySelector('#Display');
    display.value = "";
}

function piumeno() {
    let display = document.querySelector('#Display')
    display.value = '-' + display.value 
}

function perc() {
    let display = document.querySelector('#Display')
    display.value = eval (display.value / 100);
}
{
    let date = new Date()
    let ora = date.getHours()
    let minuti = date.getMinutes()
    let minutiStr = String(minuti)
    let lungMin = minutiStr.length
    console.log(lungMin)

    if (lungMin == 1) {
        document.getElementById("Ora").innerHTML = ora + ":" + "0" + minuti;
    } 
    else {
        document.getElementById("Ora").innerHTML = ora + ":" + minuti;
    }

    
}

   

