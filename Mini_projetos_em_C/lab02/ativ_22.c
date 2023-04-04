#include <stdio.h>
#include <math.h>

int main() {

    int idade, tempos;

    printf("Digite a idade do trabalhador: ");
    scanf("%d", &idade);

    printf("Digite o tempo de servico do trabalhador: ");
    scanf("%d", &tempos);

    if (idade >= 65 || tempos >= 30 || (idade >= 60 && tempos >= 25)) {
        printf("O trabalhador pode se aposentar\n");
    } else {
        printf("O trabalhador ainda nao pode se aposentar\n");
    }
    return 0;

}