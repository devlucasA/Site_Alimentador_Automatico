#include <stdio.h>


//Conversão de temperatura em Kelvin para Celsius.

int main(){
    
    float K = 293.3 ; // declarando variável "K", que recebe valor 293.3
    float C ; // declarando variável "C", 

    //imprimindo valor de "K"
    printf(" exatos %f graus Kelvin \n", K);

    C = K-273.15 ; // Conversão de "K" Kelvin , para "C" de Celsius

    //imprimindo valor que "C" recebe
    printf("conversao para Celsius : %f", C);

    return 0;

}
