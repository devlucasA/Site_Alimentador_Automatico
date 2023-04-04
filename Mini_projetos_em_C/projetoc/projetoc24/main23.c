
#include <stdio.h>


// Conversão de metros quadrados m2 para área em acres

int main(){
    
    int M = 24 ; // declarando variável "M", recebe valor de 24
    float A ; // declarando variável "A", 

    //imprimindo valor de "A"
    printf(" Exatos %d metros quadrados \n", M);

    A = M*0.000247 ; // Conversão de "A" acres  para "M" metros quadrados

    //imprimindo valor que "A" recebe
    printf("Conversao para acres : %f \n",A) ;

    return 0;

}
