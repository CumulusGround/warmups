# Split the Bill
# It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

# The function should take one parameter: an object with two or more name-value pairs which represent the members of the group and the amount spent by each. The function should return an object with the same names, showing how much money the members should pay or receive. Further points:

# The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group. If value is a decimal, round to two decimal places.

# Example

# 3 friends go out together: A spends $20, B spends $15, and C spends $10. The function should return an object showing that A should receive $5, B should receive $0, and C should pay $5.

group = {
    A: 20, 
    B: 15, 
    C: 10
}

require 'pry'
# binding.pry
# splitTheBill(group) // returns {A: 5, B: 0, C: -5}


def splitTheBill(tab_obj)
    # take the tab
    # calculate the average
    bill_total = tab_obj.values.reduce(:+)
    cost_p_p = bill_total / tab_obj.size

    # calculate the difference between the CPP and what peopl paid
    tab_obj.map {|person, amount| [person, amount - cost_p_p]}.to_h 
    
end

p splitTheBill({
    A: 20, 
    B: 15, 
    C: 10
})