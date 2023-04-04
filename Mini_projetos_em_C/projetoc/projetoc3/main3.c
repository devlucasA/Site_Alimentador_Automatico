#include <stdio.h>
#include <stdlib.h>

int main() {

// digitando três valores inteiros e imprimindo a soma deles

    int x = 0 ; // declarando variável "x" como 0
    int y = 0 ; // declarando variável "y" como 0
    int z = 0 ; // declarando variável "z" como 0

    printf("Digite tres valores: \n" );

    scanf ("%i", &y); // valor digitado colocado em "y"
    scanf ("%i", &x); // valor digitado colocado em "x"
    scanf ("%i", &z); // valor digitado colocado em "z"
    int r = x + y + z;  // logo após "x","y" e "z" receber os valores digitados, seram somados e o valor recebido vai para "r"

    //imprimindo valor de "r"

    printf("resultado de r = %i \n",r );

    return 0;
}
