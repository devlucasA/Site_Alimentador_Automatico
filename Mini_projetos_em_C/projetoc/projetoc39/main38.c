#include <stdio.h>
#include <stdlib.h>
#define d 780000.000


// R$780.000,00 dividido entre três ganhadores de um concurso

int main(){

    float g1 , g2 , g3 ; // variáveis dos ganhadores 1, 2 e 3

    g1 = d*46/100; // calculando a porcentagem de g1,g2 e g3
    g2 = d*32/100;
    g3 = d*22/100;

    // imprindo o resultado de quanto eles recebem
    printf(" primeiro ganhador recebe %f reais \n", g1) ;
    printf(" segundo ganhador recebe %f reais \n", g2) ;
    printf(" terceiro ganhador recebe %f reais \n", g3) ;

    return 0;
}
