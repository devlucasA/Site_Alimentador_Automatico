#include <stdio.h>
#include <stdlib.h>
#define PI 3.141592


// Ler o valor do raio de um círculo , calcular e imprimir a área do círculo correspondente

int main(){

    int r; // variáveis r(raio) e A(área)
    float A;
    
    printf(" Digite o tamanho do raio: \n" ); //indicação para inserir valor

    scanf("%d", &r); // colocar valor

    A = PI*(r*r); // formula da área do circulo

    //imprimi A
    printf(" Area do Circulo: %f \n", A ); 

    return 0;
}

