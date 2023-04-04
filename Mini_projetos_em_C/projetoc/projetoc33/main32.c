#include <stdio.h>
#include <stdlib.h>



// Ler o tamanho do lado de um quadrado e imprimir como resultado a sua área

int main(){

    int t ; // variável tamanho
    int A ; // variável área
    
    printf(" Digite o tamanho: \n" ); //indicação para inserir valor

    scanf("%d", &t); // colocar valor

    A = t*t ; // formula para área

    //imprimindo A
    printf(" O quadrado possui %d de area \n", A );



    return 0;
}

