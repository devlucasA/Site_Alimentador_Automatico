#include <stdio.h>



// Conversão de volume em metros cúbicos m3 para litros

int main(){
    
    int M = 32 ; // declarando variável "M", recebe valor de 32
    float L ; // declarando variável "L", 

    //imprimindo valor de "M"
    printf(" Exatos %d metros cubicos \n", M);

    L = 1000*M ; // Conversão de "M" metros cúbicos para litros  "L" 

    //imprimindo valor que "L" recebe
    printf("Conversao para litros : %f \n",L) ;

    return 0;

}
