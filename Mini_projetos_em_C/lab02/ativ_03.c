#include <stdio.h>
#include <math.h>


int main(){

    float n1, n2;

    printf("Digite um numero real \n");

    scanf(" %f",&n1);

    if ((n1 >= 0 )){

        float raiz = sqrt(n1);

        printf("A raiz quadrada de %f e %f",n1 , raiz);

    }else {

        n2 = n1*n1;
        printf("%f ao quadrado e %f",n1, n2);
    }
   
    return 0;
}

