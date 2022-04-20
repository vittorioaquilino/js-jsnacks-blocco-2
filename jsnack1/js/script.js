// 1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// for
// imposto la somma a 0
// let sum = 0;

// // inizio il ciclo
// for (let i = 0; i < 5; i++) {
//     const userNumber = parseInt(prompt("inserisci un numero"));
//     console.log("numero inserito", userNumber);
//     // faccio la somma del numero inserito implementandolo nella somma
//     sum += userNumber;
// }
// // output
// console.log("somma", sum);

// while
// imposto la somma a 0
let counter = 0;
let sum = 0;

// inizio il ciclo
while (counter < 5) {
    const userNumber = parseInt(prompt("inserisci un numero"));
    console.log("numero inserito", userNumber);
    // controllo se è un numero
    if (!isNaN(userNumber)) {
    // faccio la somma del numero inserito implementandolo nella somma
        sum += userNumber;
        counter++
    } else {
        alert("non è un numero")
    }
}
// output
console.log("somma", sum);