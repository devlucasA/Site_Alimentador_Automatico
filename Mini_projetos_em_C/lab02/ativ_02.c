#include <stdio.h>
#include <math.h>


int main(){

    float n1;

    printf("Digite um numero \n");

    scanf(" %f",&n1);

    if ((n1 >= 0 )){

        float raiz = sqrt(n1);

        printf("A raiz quadrada de %f e %f",n1 , raiz);

    }else{
        printf("Numero invalido");
    }
   

}

