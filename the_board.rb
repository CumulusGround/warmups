# The Board
# Write a program that creates a string that represents an 8×4 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

# # # # # # # # #
#  # # # # # # # #
# # # # # # # # #
#  # # # # # # # #
# Extension
# When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead

# initiator = "#"

# hash_line = (initiator * multiplier).split(',')


width = 8
height = 4
multiplier = width * height
symbol = "#"

counter = 0
alt_count = 0
line_string = ""

multiplier.times do
    line_string << symbol
    counter += 1

    if counter % 8 == 0
        if alt_count == 0
            line_string << "\n "
            alt_count = 1
        else
            line_string << "\n "
            alt_count = 0
        end
    end
    line_string << " "
end

puts line_string