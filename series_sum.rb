# Series Sum
# Your task is to write a function which returns the sum of following series upto nth term(parameter).

# Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

# Rules:
# ----
# You need to round the answer to 2 decimal places and return it as String.

# If the given value is 0 then it should return 0.00
# You will only be given Natural Numbers as arguments.
# Examples:
# seriesSum(1) => 1 = "1.00"
# seriesSum(2) => 1 + 1/4 = "1.25"
# seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

def seriesSum(n)
    x = 1.to_f
    sum = 1
    if n == 0
        return sprintf('%.2f', n)
    elsif n >= 1 
        (n-1).times do
            x += 3
            sum += 1/x
        end
        return sprintf('%.2f', sum)
    end
end

p seriesSum(0) 
p seriesSum(1) #=> 1 = "1.00"
p seriesSum(2) #=> 1 + 1/4 = "1.25"
p seriesSum(5) #=> 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
p seriesSum(7) #=> 