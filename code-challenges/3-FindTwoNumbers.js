/*
*   Reto 3: Encontrar dos números
*   
*   Descrición: Encontrar dos números en el arreglo que al sumarlos den como resultado 9
*   
*   ej. [1, 3, 5, 6, 11, 23] // -> 6 y 3
*
*/

/*
*   Challenge 3: Find two Numbers
*   
*   Description: Find two numbers int the array that add them to 9
*   
*   e.g. [1, 3, 5, 6, 11, 23] // -> 6 and 3
*
*/

let array = [1, 3, 5, 6, 11, 23];
let arrayLength = array.length;
let number1, number2;
let sum, flag = false;;

loop1:
    for(let i = 0; i < arrayLength ; i++){
        number1 = array[i];

        for(let j = 0; j < arrayLength ; j++){
            if(i === j) continue;
            
            number2 = array[j];

            sum = number1 + number2;
            if(sum === 9){
                flag = true;
                break loop1;
            }
        }
    }

(flag) 
    ? console.log("The two numbers that add up to 9 in the array are the number '" + number1 + "' and '" + number2 + "'")
    : console.log("There aren't two numbers that add up to 9 in the array");
