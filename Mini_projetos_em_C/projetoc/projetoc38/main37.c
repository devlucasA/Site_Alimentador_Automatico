#include <stdio.h>
#include <stdlib.h>



// Ler valor do salário mais aumento de 25%

int main(){

    float s ; // s, sálario do funcionário
    float a ; // a, aumento

    printf(" Coloque o valor que recebe \n" ); //indicação para inserir valor

    scanf("%f", &s); // colocar valor

    a = s*25/100 ; // valor do aumento

    printf(" aumento de %f reais \n", a) ;

    s = s + a ; // salário mais o aumento

    //imprimindo s mais aumento
    printf(" pagamento passou a ser %f reais \n", s) ;

    return 0;
}
