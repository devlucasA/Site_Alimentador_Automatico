#include <stdio.h>
#include <math.h>


int main(){

    int n1;

    printf("Digite um numero inteiro: \n");

    scanf(" %d",&n1);

    if ((n1% 2 == 0)){

        printf(" esse numero e par");

    }else {
        printf(" esse numero e impar");
    }
   
    return 0;
}

