# Concat Unique Strings
# Much easier if you use Ruby!
# Take 2 strings s1 and s2 each only containing letters from a to z. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

# Example:
s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
# longest(s1, s2) => "abcdefklmopqwxy"

def concat_unique_str(str1,str2)
    # add them together
    long_string = str1 + str2
    # sort + select
    long_string.split('').uniq.sort.join
end

p concat_unique_str(s1, s2)