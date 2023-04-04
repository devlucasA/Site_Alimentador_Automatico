#include <stdio.h>
#include <math.h>

int main() {

    float h, peso_ideal;
    char sexo;
    
    
    printf("Digite a altura em metros: ");

    scanf(" %f", &h);
    
    printf("Digite o sexo em M ou F: ");

    scanf(" %c", &sexo);
    
    if ((sexo == 'M' || sexo == 'm')) {

        peso_ideal = (72.7 * h) - 58.0;

        printf("O peso ideal para um homem com altura %.2f m e %.2f kg.\n", h, peso_ideal);

    } else if ((sexo == 'F' || sexo == 'f')) {

        peso_ideal = (62.1 * h) - 44.7;

        printf("O peso ideal para uma mulher com altura %.2f m e %.2f kg.\n", h, peso_ideal);

    } else {
        printf("Sexo invalido.\n");
    }
    
    return 0;
}