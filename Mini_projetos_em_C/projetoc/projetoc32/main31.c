#include <stdio.h>
#include <stdlib.h>



// Ler um número inteiro e imprimir a soma do sucessor de seu triplo com o antecessor de seu dobro

int main(){

    //declarei variável x e j
    int x ; 
    int j ;

    scanf("%d", &x); // coloquei para digitar o x

    
    j = (x * 3) + 1 ; // j recebe esse valor de x

        
    //imprimir esse resultado de j
    printf(" sucessor de seu triplo: %d \n", j );

        x = ( x * 2) -1 ; // x recebe seu prório valor sem adição, devido ao j

    
    //imprimir esse resultado de x
    printf("  antecessor de seu dobro : %d \n", x );

         x = x + j; // somando os valores resultantes de j e x

    //imprimindo esse x
     printf(" triplo sucessor + dobro antecessor : %d \n", x );



    return 0;
}

