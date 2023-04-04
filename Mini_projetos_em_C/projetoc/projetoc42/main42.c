#include <stdio.h>
#include <stdlib.h>


// Salário-base de um funcionário mais gratificação e imposto

int main(){

    float s; // salário-base
    float b; //gratificação
    float c; //imposto

    printf(" Digite seu salario:  \n") ; // indicando valor a ser colocado

    scanf("%f", &s); // colocar valor

    b = b*5/100; //calculando gratificação
    c = c*7/100; // calculando imposto
    s = (s + b ) - c; // salário final


    // imprindo o s, quanto ele recebe mais imposto e gratificação

    printf(" quanto recebe : %f reais \n", s) ;

    return 0;
}
