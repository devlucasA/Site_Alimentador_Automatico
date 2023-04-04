#include <stdio.h>
#include <stdlib.h>


// Programa para ajudar os vendedores 

// Obs: Cessei um pouco dos comentários, devido a quantidade de códigos

int main(){

    float r4;
    float r3;
    float p ;
    float f ;
    float r;
    float r2;
    float li; 

    printf(" Quanto o produto vale: \n") ;

    scanf("%f",&li);

    printf(" Produto vale %f reais \n", li) ;

    r = li*10/100;
    r2 = li - r;

    printf(" Produto mais desconto %f reais \n" , r2) ;

    li = li + r;
    f = f*3/100;
    p = li -  f;

    printf(" Parcelas de %f reais \n" , p) ;

    li = li + f;
    r3 = li*5/100;
    r4 = li + r3;
    
    printf(" Produto a vista mais comisao: %f reais \n" , r4) ;

    li = li - r3;
    li = li - f;
    li = li + r3;

    printf(" Produto parcelado total mais comisao: %f reais \n" , li) ;

    return 0;
}
