#include <stdio.h>
#include <math.h>


int main() {

    float preco_antigo, preco_novo;
    int percentual_aumento;

    printf("Digite o preco antigo do produto: ");
    scanf("%f", &preco_antigo);

    if (preco_antigo <= 50) {
        percentual_aumento = 5;

    } else if (preco_antigo <= 100) {
        percentual_aumento = 10;
        
    } else {
        percentual_aumento = 15;
    }

    preco_novo = preco_antigo * (1 + percentual_aumento / 100.0);

    printf("O preco novo do produto e: %.2f\n", preco_novo);

    if (preco_novo <= 80) {
        printf("Barato\n");

    } else if (preco_novo <= 120) {
        printf("Normal\n");

    } else if (preco_novo <= 200) {
        printf("Caro\n");

    } else {
        printf("Muito caro\n");
    }

    return 0;
}