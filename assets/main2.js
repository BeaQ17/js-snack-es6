//SNACK 2
//Creare array di oggetti con squadre di calcio
//nome, punti, falli
//Nome è l'unica proprietà da decidere, le altre sono 0

const squadre = [
    {
        nome: "Chievo",
        punti: 0,
        falli: 0
    },

    {
        nome: "Hellas",
        punti: 0,
        falli: 0
    },

    {
        nome: "Verona",
        punti: 0,
        falli: 0
    },
]

//generare numeri random al posto degli 0

for (i=0; i<squadre.length; i++){
    squadre[i].punti = Math.random()*50;
    squadre[i].falli = Math.random()*50;
}


console.log(squadre); 


//usando la destrutturazione, creiamo un nuovo array 
const array2 = [];

for (i=0; i<squadre.length; i++){
    const {nome, falli} = squadre[i];
    array2.push({nome, falli});
}

//i cui elementi contengono solo nomi e falli subiti e stampiamo in console

console.log(array2);