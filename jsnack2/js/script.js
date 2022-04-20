// 3. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo array con la lista
const listName = ["vittorio", "luca", "giovanni", "matteo", "federico"];
console.log(listName);
const listSurname = ["sarli", "farci", "bodasca", "bianchi", "corona"];
console.log(listSurname);

// creo un array vuoto
const falseList = [];

// inizio il ciclo
for (let i = 0; i < 3; i++) {
    // genero un nome random dalla lista
    const randomNameList = Math.floor(Math.random() * listName.length);
    const randomName = listName[randomNameList];
    console.log(randomName);
    
    // genero un cognome random dalla lista
    const randomSurnameList = Math.floor(Math.random() * listSurname.length);
    const randomSurname = listSurname[randomSurnameList];
    console.log(randomSurname);

    // imposto il risultato delle generazione
    const randomGuest = `${randomName} ${randomSurname}`;
    falseList.push(randomGuest);
}
// output
console.log(falseList);
