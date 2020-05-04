# DanChat
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

require 'pry'

puts "hey, why are you here?"
input =  ""

while !!input 

    input = gets.chomp
    
    if input == "see ya"
        input = false
    elsif input == ""
        puts "Fine. Be that way!" #Empty string
        # input = gets.chomp
    elsif input == input.upcase
        puts "Woah, chill out Cuzzy!" #ALL CAPS
        # input = gets.chomp
    elsif input.include? "?"
        puts "Sure" #question
        # input = gets.chomp
    else
        puts "Whatever" #tell him something
        # input = gets.chomp
    end
end
    




