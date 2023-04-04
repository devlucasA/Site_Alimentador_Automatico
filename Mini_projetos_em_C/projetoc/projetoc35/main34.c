#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Programa que receba os valores de a e b e calcula o valor da hipotenusa através da equação

int main(){

    int a;
    int b; 
    float h; // h(hipotenusa)

    printf(" Insira a e depois b : \n" ); //indicação para inserir valor

    scanf("%d", &a); // colocar valor
    scanf("%d", &b);

    h = (a*a) + (b*b); // formula da hipotenusa

    h = sqrt(h); // hipotenusa recebe valor da raiz

    //imprimi h
    printf(" hipotenusa : %f \n", h );


    return 0;
}

