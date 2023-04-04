#include <stdio.h>
#include <math.h>


int main() {

    int numb, soma = 0, r;
    
    printf("Digite um numero inteiro maior do que zero: ");

    scanf("%d", &numb);
    
    if (numb <= 0) {

        printf("Numero invalido.\n");

        return 0;
    }
    
    while (numb > 0) {

        r = numb % 10;
        soma += r;
        numb /= 10;
    }
    
    printf("A soma dos algarismos do numero e: %d\n", soma);
    
    return 0;
}