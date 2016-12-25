array = {0, 0} --Random number & counter. Working Demo: https://repl.it/Euo8
while (array[2] ~= 666) do --We are playing with the number 666, checks if we get lucky this time		Loop Starts
  array[2] = math.random (1,1296) --1 in 1296 random generator
  array[1] = array[1] + 1 --Increases dice counter by 1
end --Loop Ends
print(("Yathzee in "), array[1]) --Display stats at true
