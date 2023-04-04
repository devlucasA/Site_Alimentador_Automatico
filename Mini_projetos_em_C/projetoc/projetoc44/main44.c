#include <stdio.h>

// Altura do degrau de uma escada e a altura que o usuário deseja alcançar subindo a escada

int main() {

    float altdegrau, altobjetivo;
    int ndegraus;

    printf("Digite a altura do degrau : ");
    scanf("%f", &altdegrau);

    printf("Digite a altura que deseja alcançar subindo a escada : ");
    scanf("%f", &altobjetivo);

    ndegraus = altobjetivo / altdegrau;

    printf(" Precisara subir %d degraus.\n", ndegraus);

    return 0;

}