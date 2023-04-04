#include <stdio.h>

int main() {
    int numb1, numb2, numb3, temp;

    printf("Digite tres numeros: ");
    scanf("%d %d %d", &numb1, &numb2, &numb3);

    
    if (numb1 > numb2) {
        temp = numb1;
        numb1 = numb2;
        numb2 = temp;
    }
    if (numb2 > numb3) {
        temp = numb2;
        numb2 = numb3;
        numb3 = temp;
    }
    if (numb1 > numb2) {
        temp = numb1;
        numb1 = numb2;
        numb2 = temp;
    }

    
    printf(" numeros em ordem crescente : %d %d %d\n", numb1, numb2, numb3);

    return 0;
}