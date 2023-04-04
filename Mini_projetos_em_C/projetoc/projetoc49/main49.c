#include <stdio.h>

// Programa para ler o horário 

int main(){



    int hora, minuto, segundo, duracao, Tsegundos, horaf, minutof, segundof;

    
    printf("Informe o horário de início (HH:MM:SS): \n");
    scanf("%d:%d:%d", &hora, &minuto, &segundo);

    
    printf("Informe a duração da experiência em segundos: \n");
    scanf("%d", &duracao);

   
    Tsegundos = hora*3600 + minuto*60 + segundo + duracao;

    
    horaf = Tsegundos/3600;
    minutof = (Tsegundos%3600)/60;
    segundof = Tsegundos%60;

    //horário final

    printf("Horário final: %02d:%02d:%02d\n", horaf, minutof, segundof);

    return 0;
    
}