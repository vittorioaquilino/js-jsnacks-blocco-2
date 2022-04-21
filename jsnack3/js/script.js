// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedo un numero da inserire all'utene
let userNumber;
do {
    userNumber = parseInt(prompt("inserisci un numero"));
    console.log("numero inserito", userNumber);
} while (userNumber < 1 || isNaN(userNumber))

// creo un array vuoto
const numberList = [];

// inizio il ciclo
for (let i = 1; i <= userNumber; i++) {
    // faccio il cubo del numero
    // const cube = i ** 3; > prima soluzione 
    const cube = Math.pow(i, 3);
    console.log("cubo", cube);
    // inserisco i cubi all'interno dell'array
    numberList.push(cube);
}
// output
console.log(numberList);

