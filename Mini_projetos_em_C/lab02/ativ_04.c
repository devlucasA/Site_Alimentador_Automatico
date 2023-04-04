#include <stdio.h>
#include <math.h>


int main(){

    float n1, n2;

    printf("Digite um numero: \n");

    scanf(" %f",&n1);

    if ((n1 >= 0 )){

        float raiz = sqrt(n1);

        printf("A raiz quadrada de %.2f e %.2f \n",n1 , raiz);

        n2 = n1*n1;
        printf("%.2f ao quadrado e %.2f \n",n1, n2);

    }else {

        printf("Numero invalido");
    }
   
    return 0;
}