
#include <stdio.h>



// Conversão de área em acres para metros quadrados m2

int main(){
    
    int A = 18 ; // declarando variável "A", recebe valor de 18
    float M ; // declarando variável "M", 

    //imprimindo valor de "A"
    printf(" Exatos %d acres \n", A);

    M = A*4048.58 ; // Conversão de "A" acres  para "M" metros quadrados

    //imprimindo valor que "M" recebe
    printf("Conversao para metros quadrados : %f \n",M) ;

    return 0;

}
