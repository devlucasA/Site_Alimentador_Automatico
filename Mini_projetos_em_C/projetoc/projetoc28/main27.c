#include <stdio.h>



// leitura de três valores e apresentando como resultado, a soma dos quadrados dos três valores lidos

int main(){

    // declarando variáveis x,y e z com 3,4,5
    int x = 3; 
    int y = 4;
    int z = 5;

    z = (x*x) + (y*y) + (z*z); // soma dos quadrados dos três valores, sendo recebido por z


    //imprimindo z
    printf("resultado da soma dos quadrados dos tres valores lidos: %d \n", z);

    return 0;

}
