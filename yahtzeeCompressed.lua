array = {0, 0} --Random number & counter. Working Demo: https://repl.it/Euo8
while (array[1] ~= 666) do --We are playing with the number 666, checks if we get lucky this time		Loop Starts
  array[1] = math.random (1,1296) --1 in 1296 random generator
  array[2] = array[2] + 1 --Increases dice counter by 1 --Displays stats every throw
end                                                                                                 --Loop Ends
print(array[1], array[2]) --Display stats at true
