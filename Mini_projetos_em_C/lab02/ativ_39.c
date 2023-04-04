int main() {
    float salario_atual, salario_reajs;
    int tempos, bonus;

    printf("Digite o salario atual do funcionario: ");
    scanf("%f", &salario_atual);

    printf("Digite o tempo de servico do funcionario, em anos: ");
    scanf("%d", &tempos);

   
    if (salario_atual <= 500.0) {
        salario_reajs = salario_atual * 1.25;

    } else if (salario_atual <= 1000.0) {
        salario_reajs = salario_atual * 1.2;

    } else if (salario_atual <= 1500.0) {
        salario_reajs = salario_atual * 1.15;

    } else if (salario_atual <= 2000.0) {
        salario_reajs = salario_atual * 1.1;
    } else {
        salario_reajs = salario_atual;
    }

    
    if (tempos< 1) {
        bonus = 0;
    } else if (tempos <= 3) {
        bonus = 100;
    } else if (tempos <= 6) {
        bonus = 200;
    } else if (tempos <= 10) {
        bonus = 300;
    } else {
        bonus = 500;
    }

   
    salario_reajs += bonus;

    if (salario_reajs == salario_atual) {
        printf("O funcionario nao tem direito a nenhum aumento.\n");
    } else {
        printf("O salario final reajustado do funcionario e: R$ %.2f\n", salario_reajs);
    }

    return 0;
}