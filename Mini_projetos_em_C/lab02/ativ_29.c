#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {

    int a, b, resposta, acertos = 0;
    
    srand(time(NULL)); 

    for (int i = 0; i < 5; i++) { 
        a = rand() % 100 + 1; 
        b = rand() % 100 + 1;

        printf("Qual é a soma de %d + %d?\n", a, b);
        scanf("%d", &resposta);

        if (resposta == a + b) {
            printf("Resposta correta!\n");
            acertos++;

        } else {
            printf("Resposta incorreta. A resposta correta é %d.\n", a + b);
        }
    }

    printf("Você acertou %d de 5 perguntas.\n", acertos);

    return 0;
}