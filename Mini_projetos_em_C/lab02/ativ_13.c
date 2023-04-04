#include <stdio.h>
#include <math.h>

int main() {

    float nota1, nota2, nota3, media;
    
    do { printf("Digite a nota da primeira prova: ");

        scanf(" %f", &nota1);
    
        printf("Digite a nota da segunda prova: ");

        scanf(" %f", &nota2);
    
        printf("Digite a nota da terceira prova: ");

        scanf(" %f", &nota3);

        if (nota1 > 0 && nota2 > 0 && nota3 > 0 ){

            printf("\n Caractere Valido \n ");

        }else {
            printf("\n Caractere invalido \n");
        }

    }while (nota1 < 0 || nota2 < 0 || nota3 < 0 );

    
    media = (nota1 + nota2 + (nota3 * 2)) / 4;
    
    printf("A media e: %.2f\n", media);
    
    if (media >= 60) {

        printf("Estudante aprovado\n");
    } else {

        printf("Estudante reprovado\n");
    }
    
    return 0;
}
