# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

# It should remove all values from list a, which are present in list b.

# array_diff([1,2],[1]) == [2]
# If a value is present in b, all of its occurrences must be removed from the other:

# array_diff([1,2],[1]) == [2]


def array_diff(a, b)
  filtered_array = a.select { |num| 
    unless b.include?(num)
      num
    end
  }


  # THE BETTER ANSWER
  # a - b
end


p array_diff([1,2],[1])
p array_diff([1,2,2,4,8],[1,3,10,2])  #4,8
p array_diff([1,2],[])


# require 'pry'
# binding.pry