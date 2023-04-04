#include <stdio.h>
#include <math.h>

int main() {

    float v, comissao;

    printf("Digite o valor da venda: ");
    scanf("%f", &v);

    if (v >= 100000.0) {
        comissao = 700.0 + 0.16 * v;

    } else if (v >= 80000.0) {
        comissao = 650.0 + 0.14 * v;

    } else if (v >= 60000.0) {
        comissao = 600.0 + 0.14 * v;

    } else if (v >= 40000.0) {
        comissao = 550.0 + 0.14 * v;

    } else if (v >= 20000.0) {
        comissao = 500.0 + 0.14 * v;

    } else {
        comissao = 400.0 + 0.14 * v;
    }

    printf("A comissao a ser paga e R$%.2f.\n", comissao);

    return 0;
}