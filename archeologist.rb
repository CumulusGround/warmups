# Time to fool some archaeologists
# You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

## two argument A and B
map_array = []
line_array = []
target_array = ["X"]
number_of_array = 5
number_of_items = 5 #A

## make an array with the number of items
number_of_items.times do
    line_array.push("A")   
end

(number_of_items-1).times do
    target_array.insert(index,"A")
end

## duplicate the array
(number_of_array-1).times do
    map_array.push(line_array)
end

# map_array[1][3] = "X"
x_loc = rand(number_of_array)
map_array.insert(x_loc, target_array)

p map_array

## make a x
# map_array[rand(number_of_array)][x_loc] = "X"

#