#include <stdio.h>
#include <math.h>

int main() {

    int dia, mes, ano, bissexto;
    
 
    printf("Digite a data no formato DD/MM/AAAA: ");
    scanf("%d/%d/%d", &dia, &mes, &ano);
    
    
    if(mes < 1 || mes > 12) {
        printf("Data invalida\n");
        return 0;
    }
    
    
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0)
        bissexto = 1;
    else
        bissexto = 0;

    
    switch(mes) {
        case 2:
            if(bissexto && dia > 29) {
                printf("Data invalida\n");
                return 0;
            }
            else if(!bissexto && dia > 28) {
                printf("Data invalida\n");
                return 0;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(dia > 30) {
                printf("Data invalida\n");
                return 0;
            }
            break;
        default:
            if(dia > 31) {
                printf("Data invalida\n");
                return 0;
            }
    }
    
  
    printf("Data valida\n");
    
    return 0;
}