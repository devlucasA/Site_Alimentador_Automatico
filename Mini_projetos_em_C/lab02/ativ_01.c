#include <stdio.h>

int main(){

    int n1 , n2;

    printf("Digite o primeiro numero: \n ");

    scanf(" %d",&n1);

    printf("Digite o segundo numero: \n ");

    scanf(" %d",&n2);

    if ((n1 > n2)){

        printf("Este e o maior numero:  %d \n",n1);

    }else if ((n2 > n1)){

        printf("Este e o maior numero:  %d \n",n2);

    }else {

        printf("Este numero e igual");

    }

    return 0;


}