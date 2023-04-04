#include <stdio.h>



// Conversão de área em metros quadrados m2 para hectares

int main(){
    
    int M = 34380 ; // declarando variável "M", recebe valor de 380
    float H ; // declarando variável "H", 

    //imprimindo valor de "M"
    printf(" Exatos %d metros quadrados \n", M);

    H = M*0.0001 ; // Conversão de "M" m2  para "H" hectares

    //imprimindo valor que "H" recebe
    printf("Conversao para hectare : %f \n",H) ;

    return 0;

}
