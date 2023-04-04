#include <stdio.h>

// Um número inteiro de 4 dígitos (de 1000 a 9999) e imprima 1 dígito por linha

int main() {

    int n;

    printf("Digite um numero inteiro de 4 digitos: ");
    scanf("%d", &n);

    while(n > 0) {

    printf("%d\n", n % 10);

    n = n / 10;

    }

    return 0;

}
