# Alternating Split
# For building the encrypted string:

# Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
# Do this n times!
# To do the above, you must build an encrypt(message, n) method that performs like this:

# encrypt("This is a test!", 1) -> "hsi  etTi sats!"
# encrypt("This is a test!", 2) -> "s eT ashi tist!"
require 'pry'

def encrypt(str, n)
    strArr = str.chars

    n.times do
        choppedArray = []
        # select every second character from i = 0
        i = 0
        while i < strArr.length
            choppedArray.push(strArr.slice!(i))
            i += 1
        end
        # push or concat to the end
        strArr = strArr.concat(choppedArray)
    end

    strArr.join
end


p encrypt("This is a test!", 1) #-> "hsi  etTi sats!"
p encrypt("This is a test!", 2) #-> "s eT ashi tist!"