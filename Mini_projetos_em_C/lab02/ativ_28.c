#include <stdio.h>
#include <math.h>

int main() {

    int x, y, z, opcao;
    float media;

    do{ printf("Digite tres numeros inteiros positivos: ");
        scanf("%d %d %d", &x, &y, &z);

        printf("Escolha uma das seguintes opcoes:\n");
        printf("1) Media geometrica\n");
        printf("2) Media ponderada\n");
        printf("3) Media harmonica\n");
        printf("4) Media aritmetica\n");
        scanf("%d", &opcao);

        if ( opcao > 4 || opcao < 1 ){
            printf("\nopcao invalida\n");

        }else {
            printf("\nopcao valida\n");

        }

    } while (opcao > 4 || opcao < 1);

    switch(opcao) {
        case 1:
            media = cbrt(x*y*z);
            printf("A media geometrica e: %.2f", media);
            break;
        case 2:
            media = (x + 2*y + 3*z) / 6.0;
            printf("A media ponderada e: %.2f", media);
            break;
        case 3:
            media = 3 / ((1.0/x) + (1.0/y) + (1.0/z));
            printf("A media harmonica e: %.2f", media);
            break;
        case 4:
            media = (x + y + z) / 3.0;
            printf("A media aritmetica e: %.2f", media);
            break;
        default:
            printf("Opcao invalida.");
    }

    return 0;
}