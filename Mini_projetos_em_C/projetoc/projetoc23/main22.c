#include <stdio.h>



// Conversão de comprimento em metros para jardas

int main(){
    
    int M = 14 ; // declarando variável "M", recebe valor de 14
    float J ; // declarando variável "J", 

    //imprimindo valor de "M"
    printf(" Exatos %d metros \n", M);

    J = M/0.91 ; // Conversão de "M" metros  para "J" jardas

    //imprimindo valor que "J" recebe
    printf("Conversao para jardas: %f \n",J) ;

    return 0;

}
