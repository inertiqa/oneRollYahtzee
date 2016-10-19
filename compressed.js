// Counter
var diceToss = [0,0];

// 1 in 1296 random generator
function random() {
    a = Math.floor(Math.random() * 1296 + 1);
    return a;
}

// Gets a random number, compares it to the control number, and adds +1 to the throw counter
do {
	diceToss[0] = random();
	diceToss[1]++;
}
while (diceToss[0] != 666);

// Displays stats when you get a positive
console.log = "Yahtzee took "  + diceToss[1] + " throws!";
