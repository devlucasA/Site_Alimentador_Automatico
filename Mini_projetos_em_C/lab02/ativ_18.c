#include <stdio.h>
#include <math.h>

int main() {
    int opcao;
    float valor1, valor2, resultado;

do {
    printf("Escolha uma opcao:\n");
    printf("1) Soma\n");
    printf("2) Subtracao\n");
    printf("3) Multiplicacao\n");
    printf("4) Divisao\n");
    printf("Opcao: ");
    scanf("%d", &opcao);

    if ( opcao > 4 || opcao < 1 ){

        printf("\nopcao invalida\n");
    }else {
         printf("\nopcao valida\n");
    }

    }while( opcao > 4 || opcao < 1 );

    printf("Digite o primeiro valor: ");
    scanf("%f", &valor1);

    printf("Digite o segundo valor: ");
    scanf("%f", &valor2);

    switch (opcao) {
        case 1:
            resultado = valor1 + valor2;
            printf("Resultado da soma: %.2f\n", resultado);
            break;
        case 2:
            resultado = valor1 - valor2;
            printf("Resultado da subtracao: %.2f\n", resultado);
            break;
        case 3:
            resultado = valor1 * valor2;
            printf("Resultado da multiplicacao: %.2f\n", resultado);
            break;
        case 4:
            if (valor2 != 0) {
                resultado = valor1 / valor2;
                printf("Resultado da divisao: %.2f\n", resultado);
            } else {
                printf("Erro, divisao por zero\n");
            }
            break;
        default:
            printf("Opcao invalida\n");
            break;
    }

    return 0;
}