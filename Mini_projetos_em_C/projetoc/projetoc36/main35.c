#include <stdio.h>
#include <stdlib.h>
#define PI 3.141592


// Ler a altura e o raio de um cilindro circular e imprimir o volume do cilindro

int main(){

    int h; // h(altura)
    int r; // r(raio)
    float v; // v(volume)

    printf(" Insira a altura e depois o raio : \n" ); //indicação para inserir valor

    scanf("%d", &h); // colocar valor
    scanf("%d", &r); 

    v = PI*(r*r)*h; // formula do volume
    
    //imprimindo v
    printf(" o clilindo tem %f de volume \n", v );

    return 0;
}

