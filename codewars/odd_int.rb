# Given an array, find the integer that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq)
  #count each number
  multi_counter = {}
  
  seq.each do |num|
    if multi_counter[num]
      multi_counter[num] += 1
    else
     multi_counter[num] = 1
     end
  end
  
  # then select the number that is odd
  multi_counter
    .select { |k,v| v.odd? }
    .keys
    .join.to_i
end

# BUT FOUND

# def fint_it(seq)
#   seq.detect { |num| seq.count(num).odd? }
# end