# 1. Two Sum
# Easy
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def two_sum(nums, target)
    # if the number are ascending #
    num_array = nums
    target = target
    # descending_array = nums.reverse
    indices_array = []
    # p target
    # p descending_array

    # go through the array to find the first number that the target can be substracted by
    num_array.reverse_each do |num, idx|
        if num <= target
            target -= num
            # log the index
            p idx
            original_idx = num_array.index(num)
            indices_array << original_idx
        end
    end 
    indices_array.reverse
end

p two_sum([2,7,11,15],9)