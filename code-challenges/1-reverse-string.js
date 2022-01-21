/*
*   Reto 1: Cadena Inversa
*   
*   Descrición: Se debe de obtener a la entrada una cadena de texto,
*   y devolver a la salida la cadena con sus caracteres invertidos
*   
*   ej. hello world -> dlrow olleh
*
*/

/*
*   Challenge 1: Reverse String
*   
*   Description: You must obtain a string at the input, and return 
*   the string with its characters invertes at the output
*   
*   e.g. hello world -> dlrow olleh
*
*/

let word = "Hello world",
    arrayLetters = word.split("")
    counter = arrayLetters.length-1;

let newWord = "";

for(let i = 0; i < arrayLetters.length; i++){
    newWord += arrayLetters[counter--];
}

console.log("The input word was: '" + word + "'\nThe output word is: '" + newWord + "'");