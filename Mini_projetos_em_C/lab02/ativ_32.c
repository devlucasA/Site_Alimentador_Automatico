#include <stdio.h>
#include <math.h>

int main() {
    int cod, quant;
    float valor;

    printf("Cardapio:\n");
    printf("100 _ Cachorro Quente _ R$ 1,20\n");
    printf("101 _ Bauru Simples _ R$ 1,30\n");
    printf("102 _ Bauru com Ovo _ R$ 1,50\n");
    printf("103 _ Hamburguer _ R$ 1,20\n");
    printf("104 _ Cheeseburguer _ R$ 1,70\n");
    printf("105 _ Suco _ R$ 2,20\n");
    printf("106 _ Refrigerante _ R$ 1,00\n");

    printf("Digite o codigo do produto escolhido: ");
    scanf("%d", &cod);

    printf("Digite a quantidade: ");
    scanf("%d", &quant);

    switch (cod) {
        case 100:
            valor = quant * 1.20;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 101:
            valor = quant * 1.30;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 102:
            valor = quant * 1.50;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 103:
            valor = quant * 1.20;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 104:
            valor = quant * 1.70;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 105:
            valor = quant * 2.20;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        case 106:
            valor = quant * 1.00;
            printf("Valor a pagar: R$ %.2f\n", valor);
            break;
        default:
            printf("Codigo invalido\n");
    }

    return 0;
}