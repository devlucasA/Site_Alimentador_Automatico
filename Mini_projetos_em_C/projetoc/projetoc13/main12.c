#include <stdio.h>
#include <stdio.h>

//Conversão de distância em quilômetros para milhas.

int main(){
    
    float M  ; // declarando variável "M", 
    float K = 32.2 ; // declarando variável "K", que recebe valor 32.2

    //imprimindo valor de "M"
    printf(" exatos %f km \n", K);

    M = K/1.61 ; // Conversão de "M" milhas , para "K" km

    //imprimindo valor que "K" recebe
    printf("conversao para milhas : %f \n", M);

    return 0;

}