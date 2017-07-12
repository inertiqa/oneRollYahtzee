var diceToss = [0,0]; // Counter // by OOQQ
let random = () => Math.floor(Math.random() * 1296 + 1); // 1 in 1296 random generator
do { diceToss[0] = random(); // Random number stored in array index 0 						-Loop Starts
	diceToss[1]++; // Increases dice counter by 1
} while (diceToss[0] != 666); // We are playing with the number 666, checks if we get lucky this time		-Loop Ends
console.log = "Yahtzee took " + diceToss[1] + " throws!"; // Displays stats at true
