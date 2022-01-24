/*
*   Reto 5: Insertion Sort
*   
*   Descrición:  El algoritmo de ordenamiento por inserción es un 
*    algoritmo de fácil aplicación que permite el ordenamiento de una 
*    lista.
*
*    Su funcionamiento consiste en el recorrido por la lista seleccionando
*    en cada iteración un valor como clave y compararlo con el resto 
*    insertándolo en el lugar correspondiente.
*   
*   ej. Entrada: [3, 7, 4, 8, 9, 5]
*
*/

/*
*   Challenge 5: Insertion Sort
*   
*   Description: The insertion sort algorithm is an easily applied 
*    algorithm that allows the ordering of a list.
*
*    Its operation consists of going through the list selecting a
*    value as key in each iteration and comparing it with the rest }
*    by inserting it in the corresponding place.
*   
*   e.g. Input: [3, 7, 4, 8, 9, 5]
*
*/

let array = [30, 15, 2, 21, 44, 8];
let sortArray = [];

console.log("The array is: [" + array + "]");
console.log("The new array using insertion sort´s algorithm is: [" + insertionSort(array) + "]");

//Ordenamiento de menor a mayor
function insertionSort(array){
    let arrayLength = array.length;
    let j;

    for(let i = 1; i < arrayLength; i++){
    
        number = array[i];
        j = i - 1;

        while( (j >= 0) && (number < array[j]) ){
            array[j + 1] = array[ j ];
            j--;
        }

        array[j + 1] = number;
    }

    return array;
}
