//SNACK 3
//Scrivere funzione che accetti tre parametri:
//un array, numero a e numero b (con a < b)
//la funzione ritorna un nuovo array con valori che abbiano posizione compresa tra a e b

var array = ["a", "b", "c", "d", "e"];
var numA = 1;
var numB = 4;


    const between = array.filter((letter, index) => {
        if (index > numA && index < numB) {
            return true;
        }
        return false;
});

console.log(between);


//letter= element

