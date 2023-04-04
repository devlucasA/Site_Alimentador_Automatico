#include <stdio.h>


// Conversão de centímetros em polegadas

int main(){
    
    float C = 22.2 ; // declarando variável "C", recebe valor de 22.2
    float P ; // declarando variável "P", 

    //imprimindo valor de "C"
    printf(" Exatos %f centimetros \n", C);

    P = C/2.54 ; // Conversão de "C"  centímetros em polegadas  "P" 

    //imprimindo valor que "P" recebe
    printf("Conversao para polegadas : %f \n",P) ;

    return 0;

}
