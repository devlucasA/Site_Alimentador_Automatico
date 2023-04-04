#include <stdio.h>
#include <math.h>

int main() {

    float custof, custoc, comissao, impostos;

    printf("Digite o custo de fabrica do carro: ");
    scanf("%f", &custof);

    if (custof <= 12000) {

        comissao = custof * 0.05;
        impostos = 0;
    } else if (custof > 12000 && custof <= 25000) {

        comissao = custof * 0.10;
        impostos = custof * 0.15;
    } else {
        comissao = custof * 0.15;
        impostos = custof * 0.20;
    }

    custoc = custof + comissao + impostos;

    printf("O custo ao consumidor e de: R$ %.2f\n", custoc);

    return 0;
}