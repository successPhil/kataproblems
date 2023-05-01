# def scramble(s1, s2):
#     s1lettercounts = {}
#     for letter in s1:
#         s1lettercounts[letter] = s1lettercounts.get(letter, 0) + 1
#     for char in s2:
#         if char not in s1lettercounts:
#             return False
#         s1lettercounts[char] -= 1
#         if s1lettercounts[char] < 0: return False
        
#     return True

# Created an object to store the counts of letters in s1
# Loop through s1 and create counts of each letter in our object
#Loop through s2 and first check if the letter exists in our object
#If the letter does not exist we return false
#If the letter does exist we decrement its count by 1 and check if any counts are negative
#If all letters are checked and the counts of our object are >= 0 then s1 must contain all of the letters in s2

def scramble(s1, s2):
    for letter in set(s2):
        if s1.count(letter) < s2.count(letter): return False
    return True

# We use a set() on s2 to obtain all of the unique letters in s2
# The set ensures that we do not check any duplicate letters
# We loop through that set of unique letters and call the count() built-in function
# count() will count the occurrences of a letter in a string
# We can use this to simply compare if the occurrences of a letter in s1 are lower than the occurrences in s2






print(scramble('rkqodlw', 'world')) # ==> True
print(scramble('cedewaraaossoqqyt', 'codewars')) # ==> True
print(scramble('katas', 'steak')) # ==> False