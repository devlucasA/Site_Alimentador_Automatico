#include <stdio.h>
#include <math.h>

int main() {

    float a, b, c;
    printf("Digite os lados do triangulo: ");
    scanf("%f %f %f", &a, &b, &c);
   
    if (a < b + c && b < a + c && c < a + b) {
        

        if (a == b && b == c) {
            printf("Triangulo equilatero.\n");

        } else if (a == b || b == c || c == a) {

            printf("Triangulo isosceles.\n");
        } else {

            printf("Triangulo escaleno.\n");
        }
    } else {
        printf("Os valores nao formam um triangulo.\n");
    }
    return 0;
}