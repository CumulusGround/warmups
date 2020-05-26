# Starbucks
# Write a program that holds on to coffee orders.

# c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."

# Extension
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.

# puts c1
# # => "Barrel's latte, medium, 2 sugars."

class Coffee
    def initialize(name, type, size = 'medium', n_sugars)
        @name = name
        @type = type
        @size = size
        @n_sugars = n_sugars
    end

    def random_consonant
        consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
        consonants.sample
    end

    def random_vowel
        vowels = ['a','e','i','o','u']
        vowels.sample
    end

    def random_times
        rand(27)
    end

    def to_s
        switch_name = @name.gsub(/[aeiou]/, random_vowel())
        switch_name = switch_name.gsub(switch_name[0], random_consonant())
        "#{ switch_name }'s #{ @type }, #{ @size }, #{ @n_sugars } sugars."
    end
end

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)

require'pry'
binding.pry