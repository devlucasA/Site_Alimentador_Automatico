#include <stdio.h>


//Conversão de milhas para  distância em quilômetros.

int main(){
    
    float M = 20.0 ; // declarando variável "M", que recebe valor 20.0
    float K ; // declarando variável "K", 

    //imprimindo valor de "M"
    printf(" exatos %f milhas \n", M);

    K = 1.61*M ; // Conversão de "M" milhas , para "K" km

    //imprimindo valor que "K" recebe
    printf("conversao para km : %f \n", K);

    return 0;

}
