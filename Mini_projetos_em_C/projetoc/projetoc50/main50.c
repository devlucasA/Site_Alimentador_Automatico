#include <stdio.h>

// Programa que calcule o ano de nascimento de uma pessoa a partir de sua idade e do ano atual.


int main() {

    int idade, anat, anonas;

    printf("Digite sua idade: ");
    
    scanf("%d", &idade);

    printf("Digite o ano atual: ");
    scanf("%d", &anat);

    anonas = anat - idade;

    printf(" Voce nasceu : %d\n", anonas);

    return 0;

}