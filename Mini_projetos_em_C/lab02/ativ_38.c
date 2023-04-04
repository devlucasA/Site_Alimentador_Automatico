
#include <stdio.h>
#include <stdbool.h>

int main() {

    const int ANO_ATUAL = 2022;
    int dia, mes, ano;
    
   
    printf("Digite a data de nascimento no formato DD MM AAAA: ");
    scanf("%d %d %d", &dia, &mes, &ano);
    
    
    bool diaValido = true;
    if (dia <= 0) {
        diaValido = false;
    } else if (mes == 2) {
       
        if (dia > 29 || (dia == 29 && (ano % 4 != 0 || (ano % 100 == 0 && ano % 400 != 0)))) {
            diaValido = false;
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
   
        if (dia > 30) {
            diaValido = false;
        }
    } else {

        if (dia > 31) {
            diaValido = false;
        }
    }
    

    bool mesValido = (mes >= 1 && mes <= 12);
    

    bool anoValido = (ano <= ANO_ATUAL);
    
    
    if (diaValido && mesValido && anoValido) {

        printf("Data valida\n");

    } else {
        printf("Data invalida\n");
    }
    
    return 0;
}