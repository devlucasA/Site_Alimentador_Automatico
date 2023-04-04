#include <stdio.h>
#include <math.h>

int main() {
    
    float distancia, L, cons;

    printf("Digite a distancia percorrida em Km: ");
    scanf("%f", &distancia);

    printf("Digite a quantidade de litros de gasolina consumidos: ");
    scanf("%f", &L);

    cons = distancia / L;

    printf("Consumo: %.2f Km/l\n", cons);

    if (cons < 8.0) {
        printf("Venda o carro!\n");
    } else if (cons>= 8.0 && cons <= 14.0) {
        printf("Economico\n");

    } else {
        printf("Super economico\n");
    }

    return 0;
}