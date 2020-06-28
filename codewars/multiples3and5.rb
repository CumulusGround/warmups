# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Note: If the number is a multiple of both 3 and 5, only count it once.




def solution(number)
  # list all the numbers divisible by 3 OR 5 // NOT BOTH
  sum = 0

  i = 1
  while i < number
    if i % 3 == 0 || i % 5 == 0
      sum += i
    end

    i +=1
  end

  sum
end



p solution(10)#, 23
p solution(20)#, 78
p solution(200)#, 9168

# OR
# def solution(number)
#   (1...number).select {|i| i%3==0 || i%5==0}.inject(:+)
# end