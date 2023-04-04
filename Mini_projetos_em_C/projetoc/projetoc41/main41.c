#include <stdio.h>
#include <stdlib.h>
#define m 31 


// Valor que um funcinário deve receber por mês

int main(){

    float d ; // 10%
    float hd ; // horas trabalhadas
    float j ; // recebido
    float h ; // valor recebido por hora

    printf(" Digite o valor em dinheiro de sua hora de Trabalho :  \n") ;

     scanf("%f", &h); // colocar valor

    printf(" Digite quantas horas trabalha no dia:  \n") ; // indicando valor a ser colocado

    scanf("%f", &hd); // colocar valor

    j = h*hd ; // dinheiro em horas x horas trabalhadas
    d = j * 10/100; // calculando o 10%
    j = (j * m) + d; // calculando mes mais 10%


    // imprindo o j, quanto ele recebe mais 10%

    printf(" valor real recebido por mes: %f reais \n", j) ;

    return 0;
}
