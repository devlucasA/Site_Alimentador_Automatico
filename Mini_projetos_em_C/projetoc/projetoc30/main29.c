#include <stdio.h>


// Valor em real e a cotação do dólar, imprimindo valor em dólares

int main(){

    float Dolar = 5.25 ; // variável "Dolar" com valor da cotação do dolar
    float Real = 4.50; // variável "Real" com valor em reais

    Dolar = Real/Dolar; // imprimindo o valor correspondente em dólares.


    // imprimindo "Real" e "Dolar"
    printf(" valor do dolar com a cota, considerando %f reais, sera de %f dolares\n", Real, Dolar );

    return 0;

}
