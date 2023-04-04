#include <stdio.h>
#include <math.h>

int main() {
    int opcao;
    float num1, num2, result;
    
do { printf("Escolha a opcao:\n");

     printf("1) Soma de 2 numeros.\n");
     printf("2) Diferenca entre 2 numeros (maior pelo menor).\n");

     printf("3) Produto entre 2 numeros.\n");
     printf("4) Divisao entre 2 numeros (o denominador nao pode ser zero).\n");
     scanf("%d", &opcao);

    if ( opcao > 4 || opcao < 1 ){

        printf("\nopcao invalida\n");

    }else {
        printf("\nopcao valida\n");
 }

    }while(opcao > 4 || opcao < 1 );
    
    switch (opcao) {
        case 1:
            printf("Digite o primeiro numero: ");
            scanf("%f", &num1);
            printf("Digite o segundo numero: ");
            scanf("%f", &num2);
            result = num1 + num2;
            printf("Resultado: %.2f", result);
            break;
        case 2:
            printf("Digite o primeiro numero: ");
            scanf("%f", &num1);
            printf("Digite o segundo numero: ");
            scanf("%f", &num2);
            if (num1 > num2) {
                result = num1 - num2;
            } else {
                result = num2 - num1;
            }
            printf("Resultado: %.2f", result);
            break;
        case 3:
            printf("Digite o primeiro numero: ");
            scanf("%f", &num1);
            printf("Digite o segundo numero: ");
            scanf("%f", &num2);
            result = num1 * num2;
            printf("Resultado: %.2f", result);
            break;
        case 4:
            printf("Digite o primeiro numero: ");
            scanf("%f", &num1);
            printf("Digite o segundo numero: ");
            scanf("%f", &num2);
            if (num2 != 0) {
                result = num1 / num2;
                printf("Resultado: %.2f", result);
            } else {
                printf("Erro, denominador igual a zero");
            }
            break;
        default:
            printf("Erro");
    }
    
    return 0;
}
