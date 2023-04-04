#include <stdio.h>


// Conversão de comprimento em jardas para metros

int main(){
    
    int J = 12 ; // declarando variável "J", recebe valor de 12
    float M ; // declarando variável "M", 

    //imprimindo valor de "J"
    printf(" Exatas %d jardas \n", J);

    M = 0.91*J ; // Conversão de "J" jardas  para "M" metros

    //imprimindo valor que "M" recebe
    printf("Conversao para metros: %f \n",M) ;

    return 0;

}
