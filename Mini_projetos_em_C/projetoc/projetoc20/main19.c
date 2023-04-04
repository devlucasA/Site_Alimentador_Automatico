#include <stdio.h>


// Conversão de massa em quilogramas para massa em libras

int main(){
    
    int K = 55 ; // declarando variável "K", recebe valor de 55
    float L ; // declarando variável "L", 

    //imprimindo valor de "K"
    printf(" Exatos %d quilogramas \n", K);

    L = K/0.45 ; // Conversão de "K" quilogramas  para "L" libras

    //imprimindo valor que "L" recebe
    printf("Conversao para libras: %f \n",L) ;

    return 0;

}
