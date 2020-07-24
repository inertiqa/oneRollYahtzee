//by OOQQ
//dices [dice 1 throw], [number of 1's]
//      [dice 2 throw], [number of 2's]
//      [dice 3 throw], [number of 3's]
//      [dice 4 throw], [number of 4's]
//      [dice 5 throw], [number of 5's]
//      [trow counter], [number of 6's]
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
	int dices[2][6] ={{0}, {0}};
	int i;

	srand((unsigned) time(NULL));

	do {
		for(i = 0; i < 5; i++) { //resets the results array
			dices[1][i] = 0;
		}

		for(i = 0; i < 5; i++) { //populates the throw array
			dices[0][i] = (rand() % 6) + 1;
		}

		dices[0][5]++; //ticks the throw counter +1

		for(i = 0; i < 5; i++) { //populates the results array
			switch(dices[0][i]) {
				case 1: dices[1][0]++;
					break;
				case 2: dices[1][1]++;
					break;
				case 3: dices[1][2]++;
					break;
				case 4: dices[1][3]++;
					break;
				case 5: dices[1][4]++;
					break;
				default : dices[1][5]++;
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
