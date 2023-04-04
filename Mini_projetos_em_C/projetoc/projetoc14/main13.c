#include <stdio.h>
#define PI  3.141592

// Conversão de ângulo em graus para radianos

int main(){
    
    float R  ; // declarando variável "R", 
    float G = 90.2 ; // declarando variável "G", que recebe valor 90.2

    //imprimindo valor de "G"
    printf(" exatos %f graus \n", G);

    R = G*PI/180; // Conversão de "G" ângulo , para "R" radianos

    //imprimindo valor que "R" recebe
    printf("conversao para radianos : %f \n", R);

    return 0;

}
