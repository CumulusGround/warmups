# Dice
# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# # => [2,5,1]

class Dice
  def initialize
    
  end

  def self.roll(n_times = 1)
    if n_times == 1
      return rand(1..6)
    else
      roll_array = []
      n_times.times do
        roll_array<< rand(1..6)
      end
      return roll_array
    end
  end
end


require 'pry'
binding.pry