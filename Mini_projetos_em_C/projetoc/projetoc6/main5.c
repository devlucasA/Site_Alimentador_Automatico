#include <stdio.h>


//Conversão de temperatura em Celsius para Fahrenheit.

int main(){

    float C = 24.40 ; // declarando variável "C", que recebe valor 24.40
    float F ; // declarando variável "F"

    //imprimindo valor de "C"
    printf(" exatos %f graus Celsius \n", C);

    F = C*(9.0/5.0)+32.0 ; // Conversão de "C" Celsius, para "F" de Fahrenheit
    
    //imprimindo valor que "F" recebe
    printf("conversao para Fahrenheit : %f", F);


    return 0;

}
