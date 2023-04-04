#include <stdio.h>
#include <math.h>


int main(){

    int n1, n2;

    printf("Digite um numero inteiro: \n");

    scanf(" %d",&n1);

    printf("Digite outro numero inteiro: \n");

     scanf(" %d",&n2);

    if ((n1 > n2)){

            printf("Este e o maior numero:  %d \n",n1);

    }else if ((n2 > n1)){

            printf("Este e o maior numero:  %d \n",n2);

    }else if ((n1 == n2)) {

            printf("numeros iguais");

    }else {
        printf("Erro");
    }

    return 0;
}
