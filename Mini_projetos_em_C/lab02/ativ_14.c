#include <stdio.h>
#include <math.h>

int main() {
    float notala, notasem, final, media;

    printf("Digite a nota do trabalho de laboratorio, entre 0 e 10: ");
    scanf("%f", &notala);

    printf("Digite a nota da avaliacao semestral, entre 0 e 10: ");
    scanf("%f", &notasem);

    printf("Digite a nota do exame final , entre 0 e 10: ");
    scanf("%f", &final);

    media = (notala * 2 + notasem * 3 + final * 5) / 10;

    printf("Media ponderada: %.2f\n", media);

    if (media >= 0 && media <= 2.9) {

        printf("Aluno reprovado\n");

    } else if (media >= 3 && media <= 4.9) {

        printf("Aluno em recuperacao\n");

    } else if (media >= 5 && media <= 10) {

        printf("Aluno aprovado\n");
    } else {
        printf("Notas invalidas\n");
    }

    return 0;
}