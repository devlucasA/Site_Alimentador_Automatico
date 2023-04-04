#include <stdio.h>
#define PI  3.141592

// Conversão de ângulo em radianos para graus

int main(){
    
    float R = 180.0 ; // declarando variável "R", 
    float G ; // declarando variável "G", que recebe valor 180.0

    //imprimindo valor de "G"
    printf(" exatos %f angulo em radianos \n", R);

    G = R*180/PI ; // Conversão de "R" radianos para "G" ângulo em graus

    //imprimindo valor que "G" recebe
    printf("conversao para graus : %f \n", G);

    return 0;

}
