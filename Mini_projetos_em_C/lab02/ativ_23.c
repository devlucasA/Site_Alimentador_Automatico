#include <stdio.h>
#include <math.h>


int main() {

    int ano;

    printf("Digite um ano: ");
    scanf("%d", &ano);

    if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)) {

        printf("%d ano bissexto\n", ano);

    } else {
        printf("%d nao e ano bissexto\n", ano);
    }

    return 0;
}