#include <stdio.h>
#include <math.h>

// Programa que le as coordenadas x e y de pontos no R2 e calcule sua distânciada origem (0, 0).

int main() {

    float x, y, dis;

    printf("Digite as coordenadas x e y: ");
    scanf("%f%f", &x, &y);

  
    dis = sqrt(pow(x, 2) + pow(y, 2));

    // resultado
    printf("A distancia da origem (%.2f, %.2f) eh: %.2f", x, y, dis);

    return 0;

}