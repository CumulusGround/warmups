# Lunch Orders
# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)

# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.

# Example: Greg can order a Burger, and then add Fries to his order later.

# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"

# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!

require 'pry'

raw_orders = {}

puts "Supremo Burger"
puts "Hi, (say hi)"

while gets.chomp == 'hi'

    order_list = []
    puts "Name for order?"
    name = gets.chomp
    raw_orders[name] = order_list

    puts "#{ name } wants to order?"
    raw_orders[name].push(gets.chomp)

    print "Add an other item to the order?(y)"

    while gets.chomp == "y"
        puts "#{ name } wants to order?"
        order_list.push(gets.chomp)
        print "Add an other item to the order?(y)"
    end

    puts "NEXT CUSTOMER, hi?"
end

raw_orders.each_pair do |key, value|
puts "#{key} ordered a #{value.join(', ').sub(/(.*),/, '\1 &') }"
end
