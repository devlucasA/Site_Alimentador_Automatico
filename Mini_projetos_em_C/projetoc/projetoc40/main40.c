#include <stdio.h>
#include <stdlib.h>
#define pd 30


// Valor que um encanador deve receber considerando imposto

int main(){


    int d ; // d, dias
    float des; // des, desconto
    float r; // resultado da quantia

    printf(" Digite seus dias Trabalhados:  \n") ; // indicando valor a ser colocado

    scanf("%d", &d); // colocar valor

    r = (d*pd) ; // calculando valor recebido
    des = r * 8/100; // calculando imposto
    r = r - des;


    // imprindo o r, quantia liquída mais imposto

    printf(" valor real recebido: %f reais \n", r) ;

    return 0;
}
