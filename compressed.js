var diceToss = [0,0]; // Counter
let random = () => Math.floor(Math.random() * 1296 + 1); // 1 in 1296 random generator
do { // YHTZ Game Engine
	diceToss[0] = random();
	diceToss[1]++;
} while (diceToss[0] != 666); // Control number
console.log = "Yahtzee took " + diceToss[1] + " throws!"; // Displays stats at true
