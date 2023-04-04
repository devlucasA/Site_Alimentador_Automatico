#include <stdio.h>
#include <stdlib.h>



// Ler valor do produto mais desconto de 12%

int main(){

    float p ; // produto
    float d ; // desconto

    printf(" Coloque o valor do produto \n" ); //indicação para inserir valor

    scanf("%f", &p); // colocar valor

    d = p*12/100 ; // valor do desconto

    printf(" desconto de %f reais \n", d) ;

    p = p - d ; // produto mais o desconto
   
    //imprimindo p com desconto
    printf(" produto passou a ser %f reais \n", p) ;

    return 0;
}
