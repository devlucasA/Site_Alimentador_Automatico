#include <stdio.h>



// Ler um número inteiro e imprimir o seu antecessor e o seu sucessor

int main(){

    int x = 0 ; //declarei variável x como 0

    scanf("%d", &x); // coloquei para digitar o x
    
        x = x + 1 ; // se x>=0 devera receber +1, assim sendo o sucessor
        
    //imprimir esse resultado de x
    printf("  sucessor: %d \n", x );

        x = x - 2 ; // subtrair -2 pois o x que é recebido já possui +1
        // assim sendo possível saber seu antecessor

    //imprimir esse resultado de x
    printf("  antecessor : %d \n", x );

    return 0;
}
