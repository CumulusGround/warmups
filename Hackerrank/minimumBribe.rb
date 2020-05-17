
# It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

# Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

# Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

# Function Description

# Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

# minimumBribes has the following parameter(s):

# q: an array of integers

def minimumBribes(q)
    normal_queue = q.sort
    min_bribes = 0
    #go throught the array
    q.each_with_index do |num, i|
        # what is your number => 2 & your current index
        #where do you belong normaly ?
        normal_position = normal_queue.index num
        swap_count = normal_position - i

        #is it further than two 
        if swap_count > 2
            return "too Cahotic"
        elsif swap_count >=0
            min_bribes += swap_count
        end
    end  
# return n of minimum bride or Impossible
    min_bribes
end



# [1,2,3,4,5]
# [0,1,2,3,4]
p minimumBribes([2,1,5,3,4])
p minimumBribes([2,5,1,3,4])


        # 1 - 0 = 1

        # 0 - 1 = -1 (already counted)

        # 4  -  2 = 2moves
        
        # 2 - 3 = -1 (already)

        # 3 - 5 = -1 ()
