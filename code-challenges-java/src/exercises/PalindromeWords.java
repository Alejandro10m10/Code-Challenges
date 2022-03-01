
package exercises;

/*
    1.- Crear un método que compruebe si una palabra es un palíndromo.
*/

public class PalindromeWords {
     public static void main(String[] args) {
        
        String word = "Amo la paloma";
        
        if(isPalindromeWord(word)){
            System.out.println("La palabra '" + word + "' SI es una palabra palindroma ");
        }else{
            System.out.println("La palabra '" + word + "' NO es una palabra palindroma ");
        }
    }
    
    // Método que permite saber si una palabra dada es una palabra palindroma
    public static boolean isPalindromeWord(String word){
        /* Obtenemos una oración o palabra, quitamos los espacios de la misma, la transformamos a mayusculas 
            y la separamos letra por letra para guardarla en un arreglo */
        String wordArray[] = word.replaceAll("\\s+","").toUpperCase().split("");
        int wordLength = wordArray.length; //Obtenemos el número de elementos en el arreglo
        String reverseWord[] = new String[wordLength]; 
        
        // Iteamos el arreglo original para crear un nuevo arreglo con las letras invertidas
        for(int i = 0; i< wordArray.length ; i++){
            wordLength--;
            reverseWord[i] = wordArray[wordLength];
        }
        
        /* Con el arreglo original y su arreglo con las letras invertidas comparamos sus elementos en la misma posición,
            si todas las son iguales en la misma posición quiere decir que se trata de una palabra palindroma*/
        for(int i = 0; i< wordArray.length ; i++){
             if(!wordArray[i].equals(reverseWord[i])){
                 return false;
             }
        }
        return true;
    }
}
