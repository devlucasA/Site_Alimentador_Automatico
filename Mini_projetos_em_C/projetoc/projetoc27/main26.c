#include <stdio.h>



// Conversão de hectares para metros quadrados m2 

int main(){
    
    int H = 5 ; // declarando variável "H", recebe valor de 5
    float M ; // declarando variável "M", 

    //imprimindo valor de "H"
    printf(" Exatos %d hectares \n", H);

    M = H*10000; // Conversão de "H" hectare  para "M" m2

    //imprimindo valor que "M" recebe
    printf("Conversao para metros : %f \n",M) ;

    return 0;

}
