#include <stdio.h>


//Conversão de quilômetros por hora em metros por segundo.

int main(){
    
    float M ; // declarando variável "M", 
    int K = 20.0 ; // declarando variável "K", que recebe valor 20.0

    //imprimindo valor de "K"
    printf(" exatos %d km/h \n", K);

    M = K/3.6 ; // Conversão de "K" km/h , para "M" m/s

    //imprimindo valor que "M" recebe
    printf("conversao para metros por segundo : %f", M);

    return 0;

}
