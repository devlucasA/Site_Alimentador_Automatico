#include <stdio.h>
#include <math.h>

int main() {
  float h, peso;

  printf("Digite a altura (em m) da pessoa: ");
  scanf("%f", &h);

  printf("Digite o peso (em kg) da pessoa: ");
  scanf("%f", &peso);

  if (h < 1.20) {
    if (peso <= 60) {
      printf("A\n");

    } else if (peso <= 90) {
      printf("D\n");

    } else {
      printf("G\n");

    }
  } else if (h <= 1.70) {
    if (peso <= 60) {
      printf(" B\n");

    } else if (peso <= 90) {
      printf(" E\n");

    } else {
      printf(" H\n");

    }
  } else {
    if (peso <= 60) {
      printf(" C\n");

    } else if (peso <= 90) {
      printf(" F\n");

    } else {
      printf(" I\n");
    }
  }

  return 0;
}