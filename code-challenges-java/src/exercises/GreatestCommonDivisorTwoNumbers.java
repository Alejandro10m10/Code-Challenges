
package exercises;

/*
 * 6 .- Obtener el máximo común divisor de dos números
 */

public class GreatestCommonDivisorTwoNumbers {
    public static void main(String[] args) {
        int a = 180;
        int b = 324;
        int mcd = maximoComunDivisor(a, b);
        System.out.printf("El MCD de %d y %d es %d\n", a, b, mcd);
    }

    // Utilizamos un método recursivo para ir iterando el valor de la descomposicion
    public static int maximoComunDivisor(int a, int b) {
        if (b == 0) return a;
        return maximoComunDivisor(b, a % b);
    }
}
