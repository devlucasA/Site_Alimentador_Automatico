#include <stdio.h>

// Programa para converter uma letra maiúscula em letra minúscula

int main() {

    char mai, mi;

    printf("Digite uma letra maiuscula: ");
    scanf("%c", &mai);

    // verifica se a letra digitada é maiúscula
    if (mai >= 'A' && mai <= 'Z') {

        // Conversão da letra maiúscula para minúscula
        mi = mi + ('a' - 'A');

        printf("A letra digitada em minuscula e: %c\n", mi);
    } else {
        printf("Voce nao digitou uma letra maiuscula.\n");
    }

    return 0;
}


