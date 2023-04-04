#include <stdio.h>

// Amigos jogaram na loteria

int main(void) {

    float val1, val2, val3, premio, total;

    
    printf("Informe o valor investido pelo primeiro apostador: ");
    scanf("%f", &val1);

    printf("Informe o valor investido pelo segundo apostador: ");
    scanf("%f", &val2);

    printf("Informe o valor investido pelo terceiro apostador: ");
    scanf("%f", &val3);

    
    total = val1 + val2 + val3;

    
    printf("Informe o valor do prêmio: ");
    scanf("%f", &premio);

    
    float ganho1 = premio * (val1 / total);
    float ganho2 = premio * (val2 / total);
    float ganho3 = premio * (val3 / total);

    // resultado
    printf("O primeiro apostador vai ganhar R$%.2f\n", ganho1);
    printf("O segundo apostador vai ganhar R$%.2f\n", ganho2);
    printf("O terceiro apostador vai ganhar R$%.2f\n", ganho3);

return 0;

}