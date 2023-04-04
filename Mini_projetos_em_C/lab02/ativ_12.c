#include <stdio.h>
#include <math.h>


int main() {

    int numb;
    float r;

    printf("Digite um numero inteiro: ");

    scanf(" %d", &numb);

    if ( numb < 0){

        printf("Numero invalido");

    } else {

     float r = log10(numb);

        printf("O logaritimo desse numero e: %f",r);

    }

    return 0;

}