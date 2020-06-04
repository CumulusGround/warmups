# Allergies
# An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

# The list of items (and their value) that were tested are:

# eggs (1)
# peanuts (2)
# shellfish (4)
# strawberries (8)
# tomatoes (16)
# chocolate (32)
# pollen (64)
# cats (128)
# So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

# Write a program that, given a person's score can tell them

# a) whether or not they're allergic to a given item, and b) the full list of allergies.

# Remember to write tests to see if your solution works

# allergies = Allergies.new(34)
# allergies.allergic_to?('chocolate')
# => true
# allergies.allergic_to?('cats')
# => false
# allergies.list
# => ['peanuts', 'chocolate']


class Allergies
  def initialize(score)
    @score = score
    @allergie_list = check_for_allergies(@score)
  end

  def check_for_allergies(score)
    strains = {
      "cats"=> 128,
      "pollen" => 64,
      "chocolate" => 32,
      "tomatoes" => 16,
      "strawberries" => 8,
      "shellfish" => 4,
      "peanuts" => 2,
      "eggs" => 1
    }

    allergie_array = []
    strains.each do |strain, value|
      if score >= value
        allergie_array << strain
        score -= value
      end
    end
    allergie_array
  end


  def allergic_to?(strain)
    if @allergie_list.include?(strain)
      true
    else
      false
    end
  end

  def list
    @allergie_list
  end
  def score
    @score
  end
end

a1 = Allergies.new(34)
# allergies.list
# => ['peanuts', 'chocolate']
a2 = Allergies.new(135)
# cat, shellfish, peanuts, eggs
a3 = Allergies.new(48)
# choco and tomato
# a4 = Allergies.new(135)
# cat, shellfish, peanuts, eggs

require 'pry'
binding.pry