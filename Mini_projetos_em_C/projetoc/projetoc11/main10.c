#include <stdio.h>


//Conversão de metros por segundo em quilômetros por hora.

int main(){
    
    float M = 5.0 ; // declarando variável "M", que recebe valor 5.0
    int K ; // declarando variável "K", 

    //imprimindo valor de "M"
    printf(" exatos %f m/s \n", M);

    K = M*3.6 ; // Conversão de "M" m/s , para "K" km/h

    //imprimindo valor que "K" recebe
    printf("conversao para km/h : %d", K);

    return 0;

}
