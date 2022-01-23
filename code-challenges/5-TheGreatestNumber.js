/*
*   Reto 5: Find The Greatest Number
*   
*   Descrición:  El reto es escribir una función que muestre cuál 
*    es el segundo número más grande (en valor) dentro de un array de números.
*   
*   ej. Entrada: [3, 7, 4, 8, 9, 5]
*
*/

/*
*   Challenge 5: Find The Greatest Number
*   
*   Description: The challenge is to write a function that shows what 
*   is the second largest number (in value) within an array of numbers.
*   
*   e.g. Input: [3, 7, 4, 8, 9, 5]
*
*/

let array = [3, 7, 4, 8, 9, 5];

console.log('The greatest number in the array [' + array + "] is the number '" + theGreatestNumber(array) + "'");

function theGreatestNumber(array){
    let arrayLength = array.length;
    let number, nextNumber;
    let theGreatestNumber;
    let j = 0;

    for(let i = 0 ; i < arrayLength ; i++){
        number = array[i];

        for( j ; j < arrayLength ; j++){
            if(j === i){
                continue;
            }
            nextNumber = array[j];

            if(number >= nextNumber){
                theGreatestNumber = number;
                continue;
            } else{
                theGreatestNumber = nextNumber;
                break;
            }
        }
    }

    return theGreatestNumber;
}