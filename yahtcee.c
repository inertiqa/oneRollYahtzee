//by OOQQ
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
	int dices[2][6] ={{0}, {0}};
	int i;

	srand((unsigned) time(NULL));

	do {
		for(i = 0; i < 5; i++) { //resets the results dimension
			dices[1][i] = 0;
		}

		for(i = 0; i < 5; i++) { //populates the throw dimension
			dices[0][i] = (rand() % 6) + 1;
		}

		dices[0][5] += 1; //ticks the throw counter +1

		for(i = 0; i < 5; i++) { //populates the results dimension
			switch(dices[0][i]) {
				case 1: dices[1][0] += 1;
					break;
				case 2: dices[1][1] += 1;
					break;
				case 3: dices[1][2] += 1;
					break;
				case 4: dices[1][3] += 1;
					break;
				case 5: dices[1][4] += 1;
					break;
				default : dices[1][5] += 1;
					break;
			}
		}

		printf("%d\t", dices[0][5]); //prints the throw
		for(i = 0; i < 5; i++) {
			printf("%d ", dices[0][i]);
		}

		if(dices[1][0] == 5 || //yathCee checker
			dices[1][1] == 5 ||
			dices[1][2] == 5 ||
			dices[1][3] == 5 ||
			dices[1][4] == 5) {
				printf("yathCee!\n");
		} else {
			printf("\n");
		}

	} while(dices[1][0] < 5 && //loop while not yathCee
 			 dices[1][1] < 5 &&
			 dices[1][2] < 5 &&
			 dices[1][3] < 5 &&
			 dices[1][4] < 5);

return 0;
}
