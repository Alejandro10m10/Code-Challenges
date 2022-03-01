
package exercises;

import java.util.InputMismatchException;
import java.util.Scanner;

/*
    2.- División de dos números enteros por medio de restas sucesivas
*/
public class divisionSuccessiveSubtractions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);        
        try {
            System.out.print("Digite un número entero para el dividendo: ");
            int dividendo = sc.nextInt();
            System.out.print("Digite un número entero para el divisor: ");
            int divisor = sc.nextInt();
            divRestaSucesiva(dividendo, divisor);
        } catch (InputMismatchException e) { //Excepción si el usuario no ingreso números enteros
            System.out.println("No has ingresado números enteros. ¡Verifica!");
        }
    }
    
    public static void divRestaSucesiva(int dividendo, int divisor){
        
        if(divisor == 0){ // Se comprueba que no sea una división entre cero 
            System.err.println("No se puede dividir entre cero. ");
            return;
        } else if(divisor > dividendo){ // Se comprueba que no sea una división con resultado en punto decimal
            System.out.println("El resultado de la división es: 0");
            return;
        }
        
        // Se realiza el procesidimiento de restas sucesivas
        int residuo = (dividendo - divisor);
        int resultado = 1;
        
        while(residuo >= divisor){
            residuo = residuo - divisor;
            resultado++;
        }
        System.out.println(dividendo + "/" + divisor + " = " + resultado );
        System.out.println("El resultado de la división es: " + resultado);
        System.out.println("El residuo de la división es: " + residuo);
    }
}
