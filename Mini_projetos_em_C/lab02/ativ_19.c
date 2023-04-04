
#include <stdio.h>
#include <math.h>


int main() {
    int numb;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numb);

    if (numb % 3 == 0 && numb % 5 == 0) {

        printf("%d e divisivel por 3 e 5 simultaneamente\n", numb);

    } else if (numb % 3 == 0) {
        printf("%d e divisivel por 3\n", numb);

    } else if (numb % 5 == 0) {
        printf("%d e divisivel por 5\n", numb);
    } else {
        printf("%d nao e divisivel por 3 nem por 5\n", numb);
    }

    return 0;
}



