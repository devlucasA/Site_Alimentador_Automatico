#include <stdio.h>
#include <math.h>


int main(){

    float nota1, nota2, media ;


    do {

    printf("Digite sua nota da primeira materia: \n");

    scanf(" %f",&nota1);

    printf("Digite sua nota da segunda materia: \n");

    scanf(" %f",&nota2);

    if ((nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10)){
        printf("Nota invalida \n");
    }else {
        printf("Nota valida \n");
    }

    }while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10);


    media = (nota1 + nota2)/2 ;

    printf("Sua media e: %f \n", media);


    return 0;
}

