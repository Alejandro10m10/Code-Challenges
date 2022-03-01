
package exercises;

public class PalindromeWords {
     public static void main(String[] args) {
        
        String word = "Amo la paloma";
        
        if(isPalindromeWord(word)){
            System.out.println("La palabra '" + word + "' SI es una palabra palindroma ");
        }else{
            System.out.println("La palabra '" + word + "' NO es una palabra palindroma ");
        }
    }
    
    public static boolean isPalindromeWord(String word){
        String wordArray[] = word.replaceAll("\\s+","").toUpperCase().split("");
        int wordLength = wordArray.length;
        String reverseWord[] = new String[wordLength];
        
        for(int i = 0; i< wordArray.length ; i++){
            wordLength--;
            reverseWord[i] = wordArray[wordLength];
        }
        
        for(int i = 0; i< wordArray.length ; i++){
             if(!wordArray[i].equals(reverseWord[i])){
                 return false;
             }
        }
        return true;
    }
}
