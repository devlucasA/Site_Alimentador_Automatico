#include <stdio.h>
#include <math.h>


int main() {

    float nota;
    int faltas;

    printf("Digite a nota do aluno: ");
    scanf("%f", &nota);

    printf("Digite o numero de faltas do aluno: ");
    scanf("%d", &faltas);

    if (faltas > 20) {
        if (nota >= 9.0) {

            printf(" B\n");

        } else if (nota >= 7.5) {
            printf(" C\n");

        } else if (nota >= 5.0) {
            printf(" D\n");

        } else if (nota >= 4.0) {
            printf(" E\n");

        } else {
            printf(" E\n");
        }
    } else {
        if (nota >= 9.0) {
            printf(" A\n");

        } else if (nota >= 7.5) {
            printf(" B\n");

        } else if (nota >= 5.0) {
            printf(" C\n");

        } else if (nota >= 4.0) {
            printf(" D\n");

        } else {
            printf(" E\n");
        }
    }

    return 0;
}