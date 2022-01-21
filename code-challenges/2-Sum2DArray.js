/*
*   Reto 2: Sumar un arreglo de dos dimensiones
*   
*   Descrición: Se debe sumar todas las cantidades de un arreglo de dos dimensiones
*   
*   ej. [1, 2, 3, 4, 5], // Sum = 15
*       [6, 7, 8, 9, 10], // Sum = 40
*       [11, 12, 13, 14, 15] // Sum = 65
*   Suma = 120.
*
*/

/*
*   Challenge 2: Sum an array of 2 dimensions
*   
*   Description: You must obtain the sum of all the quantities in a two-dimensional array
*   
*   e.g. [1, 2, 3, 4, 5], // Sum = 15
*       [6, 7, 8, 9, 10], // Sum = 40
*       [11, 12, 13, 14, 15] // Sum = 65
*   Sum = 120.
*
*/

let array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let sum = 0, 
    arrayLength = array.length;

for(let i = 0; i < arrayLength ; i++){

    let arraysCount = array[i].length;
    
    for(j = 0; j < arraysCount ; j++){
        sum += array[i][j]; 
    }
}

console.log("The sum of the array of 2 dimensions is: " + sum);