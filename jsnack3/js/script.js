// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedo un numero da inserire all'utene
const userNumber = parseInt(prompt("inserisci un numero"));
console.log("numero inserito", userNumber);

// creo un array vuoto
const numberList = [];

const showButton = document.getElementById("cube-list");
console.log(showButton);

// inizio il ciclo
for (let i = 0; i <= userNumber; i++) {
    // faccio il cubo del numero
    cube = i ** 3;
    console.log("cubo", cube);
    // inserisco i cubi all'interno dell'array
    numberList.push(cube);
}
// output
console.log(numberList);

