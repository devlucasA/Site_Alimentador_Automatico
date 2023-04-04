#include <stdio.h>

//Conversão de temperatura em Celsius para Kelvin.

int main(){
    
    float K ; // declarando variável "K", 
    float C = 22.4 ; // declarando variável "C", que recebe valor 22.4

    //imprimindo valor de "C"
    printf(" exatos %f graus Celsius \n", C);

    K = C + 273.15 ; // Conversão de "C" Celsius , para "K" Kelvin

    //imprimindo valor que "K" recebe
    printf("conversao para Kelvin : %f", K);

    return 0;

}
