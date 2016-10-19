// Automatic Yahtzee game and statics viewer
// Based on https://www.youtube.com/watch?v=fiTwar7mFws

/* Counter for Dice Rounds */
var diceToss = 0;

/* Counts the number of times a result appears */
var percentArray = [0,0,0,0,0,0,0,0];

/* Random number between 1 and 6 (a dice throw) */
function random() {
    a = Math.floor(Math.random() * 6 + 1);
    return a;
}

/* Function that calculates the % (rounded to two decimal places) of each possible result */
function percent(b) {
    c = ((b * 100) / diceToss).toFixed(2);
    return c;
}

/* starts the loop (ends at the last line) */
do {

	/* counter increases every throw */
	diceToss++;

	/* array that stores the results */
	var dices = [];

/* get a random number and push to array 5 times */
	for (i = 0; i <= 4; i++) {
		dices.push(random());
	}

	/* the formated results array */
	resultsArray = [0,0,0,0,0,0];

	/* sorts each result and places it into its own array position (the sorter) */
	for (var index = 0; index <= 4; index++) {
		if (dices[index] == 1) {
		resultsArray[0]++;
		} else if (dices[index] == 2) {
		resultsArray[1]++;
		} else if (dices[index] == 3) {
		resultsArray[2]++;
		} else if (dices[index] == 4) {
		resultsArray[3]++;
		} else if (dices[index] == 5) {
		resultsArray[4]++;
		} else {
		resultsArray[5]++;
		}
	}

	/* stores the biggest number in the resultsArray */
	var largestAmount = Math.max.apply(Math,resultsArray);

	/* Counts and stores how many twos (Pairs) are (For the Double Pair and Fullhouse check) */
	var countTwos = 0;
	for (index = 0; index < resultsArray.length; index++) {
		if (resultsArray[index] == 2)
		countTwos++;
	}

	/* checks for a yathzee */
	if (largestAmount == 5) {
	/* +1 (line 8) to the relevant index position that will be used to calculate the final % (line 17) */
	percentArray[7]++;
	/* Displays all the stats for everything when a yahtzee happens (end of the loop) */
	console.log("\n" + diceToss + " || " + dices + " || ***** || YAHTZEE" + "\n \n" + percentArray[7] + " Yahtzee: " + percent(percentArray[7]) + "%\n" + percentArray[6] + " Four: " + percent(percentArray [6]) + "%\n" + percentArray[5] + " Fullhouse: " + percent(percentArray[5]) + "%\n" + percentArray[4]  + " Three: " + percent(percentArray[4]) + "%\n" + percentArray[3] + " Two Pairs: " + percent (percentArray[3]) + "%\n" + percentArray[2] + " Pair: " + percent(percentArray[2]) + "%\n" + percentArray[1] + " Straight: " + percent(percentArray[1]) + "%\n" + percentArray[0] + " High Number: " + percent(percentArray[0]) + "%");
    }
/* single results formatted table */
		else if (largestAmount == 4) {
    percentArray[6]++;
    console.log(diceToss + " || " + dices + " ||  **** || Four");
/* largest amount of same numbers three, and there is a two */
    } else if (largestAmount == 3 && countTwos == 1) {
    percentArray[5]++;
    console.log(diceToss + " || " + dices + " || ··*** || Fullhouse");
    } else if (largestAmount == 3) {
    percentArray[4]++;
    console.log(diceToss + " || " + dices + " ||   *** || Three");
/* largest amount of same numbers two, and there are two twos */
    } else if (largestAmount == 2 && countTwos == 2) {
    percentArray[3]++;
    console.log(diceToss + " || " + dices + " ||  ··** || Two");
    } else if (largestAmount == 2) {
    percentArray[2]++;
    console.log(diceToss + " || " + dices + " ||    ** || Pair");
/* If the largest value is 1 and the first index is empty, its a 1-5 straight */
    } else if (largestAmount == 1 && resultsArray[0] === 0) {
    percentArray[1]++;
    console.log(diceToss + " || " + dices + " || *1==>5* || Straight");
/* same as before last index empty its also a 2-6 straight */
    } else if (largestAmount == 1 && resultsArray[5] === 0) {
    percentArray[1]++;
    console.log(diceToss + " || " + dices + " || *2<==6* || Straight");
    } else {
    percentArray[0]++;
    console.log(diceToss + " || " + dices + " ||     * || High Number");
    }
}
/* Run all the game logic while we dont get a number 5 in largestAmount (5 equal numbered dices), this conditional starts at line 23 */
while (largestAmount !== 5);
