#include <stdio.h>

// Programa que leia um número inteiro positivo de três dígitos

int main() {

    int n, inverso;

    printf("Digite um número entre 100 e 999: ");
    scanf("%d", &n);

    if (n < 100 || n > 999) {

    printf("O número digitado não está dentro do intervalo válido.\n");

    return 0;
}
    inverso = (n % 10) * 100 + ((n/10) % 10) * 10 + (n/100);

    printf("Número gerado: %d\n", inverso);
    
    return 0;
}