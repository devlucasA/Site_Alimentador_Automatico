#include <stdio.h>
#include <math.h>


int main (){

    float A, bmaior, bmenor, h;


    printf("Digite o valor da base maior do trapezio: ");
    scanf("%f",&bmaior);

    printf("Digite o valor da base menor do trapezio: ");
      scanf("%f",&bmenor);

    printf("Digite o valor da altura do trapezio: ");
    scanf("%f",&h);

    if ( bmaior < 0 && bmenor < 0 && h < 0){

        printf("Valor invalido");

    }else {
        printf("Valor Valido \n");
    }

    A = (bmaior + bmenor) * h /2;

    printf("A area do trapezio e %.2f cm", A);

    return 0;
}