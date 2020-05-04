# Switch up
# Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

# switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"

# Extension
# If words are separated by spaces or underscores, change them to dashes. For example:

# switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"

def switch_up string
    letters_array = string.split('')
    letters_invert_capitalise = []

    letters_array.each do |letter|
        if letter == "_" || letter == " "
            letters_invert_capitalise.push("-")
        elsif letter == letter.upcase
            letters_invert_capitalise.push(letter.downcase)
        else
            letters_invert_capitalise.push(letter.upcase)
        end   
    end
    letters_invert_capitalise.join
end

p switch_up("Switch caSe FoR eVery letter")
p switch_up("js_Was_created_bY BRENdan Eich")

###### OR #####

# .swapcase