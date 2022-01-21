/*
*   Reto 4: Remover duplicados
*   
*   Descrición:  Remover elementos duplicados de un arreglo
*   
*   ej. Entrada: [1, 1, 2, 3, 3, 3, 4, 5, 5]
*       Salida: [1, 2, 3, 4 ,5]
*/

/*
*   Challenge 4: Remove Duplicates
*   
*   Description: Remove duplicate elements from an array
*   
*   e.g. Input: [1, 1, 2, 3, 3, 3, 4, 5, 5]
*        Output: [1, 2, 3, 4 ,5]
*
*/

let array =  [1, 1, 2, 3, 3, 3, 4, 5, 5],
    arrayLength = array.length;
let newArray = [];

for(let i = 0; i < arrayLength ; i++){
    let number = array[i];

    if(emptyArray(newArray)){
        newArray.push(number);
        continue;
    }

    if(elementInArray(number)){
        continue;
    } else{
        newArray.push(number);
    }
}

function emptyArray(array){
    (array.length === 0) ? true : false;
}

function elementInArray(element){
    for(let i = 0; i < newArray.length ; i++){
        if(newArray[i] === element) return true;
    }
}

console.log('The array without duplicate elements is: [' + newArray + "]");