#include <stdio.h>

// Programa para ler as dimensões de um terreno

#include <stdio.h>

// Programa para ler as dimensões de um terreno


int main() {

    float comp, lar, precom, a, cust;

    printf("Digite o comprimento do terreno: ");
    scanf("%f", &comp);

    printf("Digite a largura do terreno: ");
    scanf("%f", &lar);

    printf("Digite o preco do metro de tela: ");
    scanf("%f", &precom);

    a = comp * lar;

    cust = a * precom;

    printf("Cercar um terreno de %.2f m x %.2f m com tela a R$%.2f/m, tem custo de R$%.2f\n", comp, lar, precom, cust);

    return 0;

}