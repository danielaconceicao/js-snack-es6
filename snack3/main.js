
//Scrivere una funzione che accetti tre argomenti
/** 
 * 
 * @param {Array} arr 
 * @param {Number} number1 
 * @param {Number} number2 
 * */  
function newArr(arr, number1, number2){//un array e due numeri (a più piccolo di b).
    
    if (number1 < number2){
        for (let i = number1; i <= number2; i++) {
            arr.push(i);
        }
    }else{
        for (let i = number1; i >= number2; i--) {
            arr.push(i);
        }
    }
    return arr;//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
}

const arr2 = [];
console.log(newArr(arr2, 30, 20));


