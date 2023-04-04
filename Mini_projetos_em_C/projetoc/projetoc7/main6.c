#include <stdio.h>


//Conversão de temperatura em Fahrenheit para Celsius.

int main(){
    
    float C ; // declarando variável "C", 
    float F = 140.2 ; // declarando variável "F", que recebe valor 140.2

    //imprimindo valor de "F"
    printf(" exatos %f graus Fahrenheit \n", F);

    C = 5.0*(F- 32.0)/9.0 ; // Conversão de "F" Fahrenheit , para "C" de Celsius

        
    //imprimindo valor que "C" recebe
    printf("conversao para Celsius : %f", C);

    return 0;

}
