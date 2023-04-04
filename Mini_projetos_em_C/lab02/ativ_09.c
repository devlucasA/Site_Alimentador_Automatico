#include <stdio.h>
#include <math.h>

int main() {

    float sal, prest;
    
    printf("Digite o valor do salario: ");

    scanf("%f", &sal);
    
    printf("Digite o valor da prestacao do emprestimo: ");

    scanf("%f", &prest);
    
    if ((prest > 0.2 * sal)) {
        printf("Emprestimo nao concedido\n");
    } else {
        printf("Emprestimo concedido\n");
    }
    
    return 0;
}