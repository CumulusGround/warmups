# Winnie the Pooh's Honey Problem
# You have 100 jars of honey in a row that are all initially closed. You make 100 visits to the jars of honey.

# The first time around, you visit every jar and toggle the lid (if the jar is closed, you open it; if it is open, you close it).

# The second time you only visit every 2nd jar of honey (jar #2, #4, #6, ...). The third time, every 3rd jar of honey (jar #3, #6, #9, ...), etc, until you only visit the 100th jar of honey.

# Question: Write a function that shows which jars of honey are open after Pooh's last pass.

# Extension
# Try it in JavaScript (or in Ruby if you already did it in JavaScript)


def which_jars_opened(n_visits)
  jars = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  visits = n_visits
  nth_visit = 1

  while nth_visit <= visits
    jn = 0

    while jn < jars.length
      if jars[jn] == 0
        jars[jn] = 1
      else
        jars[jn] = 0
      end
    jn += nth_visit
    end
    nth_visit += 1
  end

  positions = []
  jars.each_with_index do |jar,idx|
    if jar == 1
      positions << idx
    end
  end

  "The open jars are number #{positions}"
end
# require 'pry'
# binding.pry

puts which_jars_opened(100)



# jars.each_with_index do |jar, i|
#   if jar == 0
#     jars[i] = 1
#   else
#     jars[i] = 0
#   end
# end
