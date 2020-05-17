def rotLeft(a, d)
    d.times do
        a.push(a.shift)    
    end
    a
end

p rotLeft([1,2,3,4,5], 3) # [4,5,1,2,3]