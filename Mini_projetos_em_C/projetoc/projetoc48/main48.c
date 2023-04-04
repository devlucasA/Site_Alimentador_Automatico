#include <stdio.h>

// Valor inteiro em segundos, horas, minutos e segundos

int main() {

    int Tsegundos, horas, minutos, segundos;

    printf("Digite a quantidade total de segundos: ");

    scanf("%d", &Tsegundos);

    horas = Tsegundos / 3600;

    minutos = (Tsegundos % 3600) / 60;

    segundos = (Tsegundos % 3600) % 60;

    printf("Horas: %d\n", horas);
    printf("Minutos: %d\n", minutos);
    printf("Segundos: %d\n", segundos); 

    return 0;
}