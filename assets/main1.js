/*
Snack 1:
Creare un array di oggetti, 
ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


var arrayBici = [

    {
        nome: "racebike",
        peso: 7
    },

    {
        nome: "aerobike",
        peso: 6 
    },

    {
        nome: "lightweight",
        peso: 8
    },

    {
        nome: "endurance",
        peso: 9
    }

];

let lightbike = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {
    const bicycle = arrayBici[i];
    if(bicycle.peso < lightbike.peso) {
        lightbike = bicycle;
    }
    
}

console.log(lightbike);

const {nome, peso} = lightbike;

document.getElementById("lightone").innerHTML = `La bici più leggera è ${nome}`;