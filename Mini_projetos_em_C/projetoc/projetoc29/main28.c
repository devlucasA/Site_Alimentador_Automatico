#include <stdio.h>



// calculando a média aritmética e imprimindo o resultado

int main(){

    // declarando variáveis nota1,nota2,nota3,nota4 com 10,20,30,40
    int nota1 = 10 ;
    int nota2 = 20 ;
    int nota3 = 30 ;
    int nota4 = 40 ;
    int media ;

    media = nota1 + nota2 + nota3 + nota4 ; // somando variáveis e obtendo soma 100 dentro de media
    media = media/4 ; // com o valor recebido é dividido por 4 elementos

    //imprimindo media
    printf(" media de notas:  %d \n",media );

    return 0;

}
