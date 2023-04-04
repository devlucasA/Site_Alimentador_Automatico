#include <stdio.h>
#include <math.h>

int main() {

    int hora_entrada, minuto_entrada, hora_saida, minuto_saida, duracao_horas;
    float valor_pagar;
    
   
    printf("Digite a hora e o minuto de entrada , no formato HH MM: ");
    scanf("%d %d", &hora_entrada, &minuto_entrada);
    
    printf("Digite a hora e o minuto de saída , no formato HH MM: ");
    scanf("%d %d", &hora_saida, &minuto_saida);
    
  
    duracao_horas = hora_saida - hora_entrada;
    if (minuto_saida > minuto_entrada) {
        duracao_horas++;
    }
    
   
    if (duracao_horas <= 2) {
        valor_pagar = duracao_horas * 1.0;
    } else if (duracao_horas <= 4) {
        valor_pagar = 2.0 + (duracao_horas - 2) * 1.4;
    } else {
        valor_pagar = 4.8 + (duracao_horas - 4) * 2.0;
    }
    
    
    printf("Valor a pagar: R$%.2f\n", valor_pagar);
    
    return 0;
}