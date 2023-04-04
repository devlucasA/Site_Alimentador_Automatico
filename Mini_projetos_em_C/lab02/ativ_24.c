#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main() {

    float valor, precof;
    char estado[3];

    printf("Digite o valor do produto: ");
    scanf("%f", &valor);

    printf("Digite o estado de destino (MG, SP, RJ ou MS): ");
    scanf("%s", estado);

    if (estado[0] == 'M' && estado[1] == 'G') {
        precof = valor * 1.07;

    } else if (estado[0] == 'S' && estado[1] == 'P') {
        precof = valor * 1.12;

    } else if (estado[0] == 'R' && estado[1] == 'J') {
        precof = valor * 1.15;

    } else if (estado[0] == 'M' && estado[1] == 'S') {
        precof = valor * 1.08;
    } else {
        printf("Erro, estado de destino invalido.\n");
        exit(1);
    }

    printf("O preco final do produto e R$ %.2f.\n", precof);

    return 0;
}