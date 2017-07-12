array = {0, math.random (1,1296)} --Random number & counter. By OOQQ
while (array[2] ~= 666) do --We are playing with the number 666, checks if we get lucky this time		Loop Starts
  array[1] = array[1] + 1 --Increases dice counter by 1
  array[2] = math.random (1,1296) --1 in 1296 random generator
  print(array[1], array[2]) --Display stats at true
end --Loop Ends
