
package exercises;

import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.stream.Collectors;

/*
    3.- Invertir un número entero
*/
public class ReverseAnInteger {
    
    public static void main(String[] args) {
        // Creamos y declaramos un objeto de la clase Scanner para la lectura de datos
        Scanner sc = new Scanner(System.in); 
        try {
            System.out.print("Digite un número entero: ");
            int number = sc.nextInt();
            System.out.println("El número: '" + number + "' invertido es: '" + reverseInteger(number) + "'");
             
        } catch (InputMismatchException e) { //Excepción si el usuario no ingreso números enteros
            System.out.println("No has ingresado números enteros. ¡Verifica!");
        }
    }
    
    // Método que invierte un número entero
    public static int reverseInteger(int number){
       String numberArray[] = Integer.toString(number).split("");
       int numberLength = numberArray.length;
       String reverseNumberArray[] = new String[numberLength];
       
       // Invertimos el arreglo
       for(int i = 0; i < numberArray.length ; i++){
           numberLength--;
           reverseNumberArray[i] = numberArray[numberLength];
       }
       
       // Convertimos el arreglo a entero y lo retornamos
       return Integer.parseInt(Arrays.stream(reverseNumberArray).collect(Collectors.joining()));
    }
}
