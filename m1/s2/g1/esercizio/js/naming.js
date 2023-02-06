//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var petPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
console.log(_pet2);

document.getElementById('ciao').textContent ='Non ti saluto più';


 

var uno = prompt ('primo valore da sommare') 
var due = prompt ('secondo valore da sommare')



   var risultato = uno*due
   document.write(parseInt(uno) + parseInt (due))


var myArray = ['pantera', 'leone', 'giraffa']; //preso da internet questo meccanismo random
var rand = Math.random()*myArray.length | 0;
console.log (rand)
var rValue = myArray[rand];
var parola = rValue 

var lunghezza = rValue.length //fatto io
console.log(lunghezza)


if (lunghezza > 5) {
    document.write(' la ' + myArray[rand])
    
    
}
else {
    document.write (' il ' + myArray[rand])
}

document.write ('.  Rimane il fatto che il mio animale preferito é il '+ petPreferito +'.')
//var 12 = 'numero';