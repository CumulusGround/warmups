# A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

# Make a new file called get_squares.rb.

# Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

# NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

# get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]

# raw_array = [4, 1, 16, 1, 10, 35, 22]

def get_squares(num_array)
    
    perfect_squares = []

    num_array.each do |number|
         
        squared_number = Math.sqrt(number)

        if (squared_number ==  squared_number.to_i)
            perfect_squares << number  
        end
    end
    sorted_array = perfect_squares.sort.uniq!
end

p get_squares([4, 1, 16, 1, 10, 35, 22])
