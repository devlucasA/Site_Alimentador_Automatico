#include <stdio.h>
#include <math.h>

int main() {
    int mes;

    printf("Digite um numero entre 1 e 12: ");
    scanf("%d", &mes);

    switch (mes) {
        case 1:
            printf("Janeiro\n");
            break;
        case 2:
            printf("Fevereiro\n");
            break;
        case 3:
            printf("Marco\n");
            break;
        case 4:
            printf("Abril\n");
            break;
        case 5:
            printf("Maio\n");
            break;
        case 6:
            printf("Junho\n");
            break;
        case 7:
            printf("Julho\n");
            break;
        case 8 : 
            printf("Agosto\n");
            break;
        case 9 : 
            printf("Setembro\n");
            break;
        case 10 :
            printf("Outubro\n");
            break;
        case 11 :
            printf("Novembro\n");
            break;
        case 12 :
            printf("Dezembro\n");

        default:
            printf("Erro\n");
    }

    return 0;
}