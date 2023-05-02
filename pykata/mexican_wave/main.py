def wave(people):
    wavearr = []
    start = 0
    person = ""
    if not people:
            return []
    for i in range(len(people)):
        
        if people[i] == ' ':
             start += 1
        elif start == 0 and people[i].isalpha():
            person = people[start].upper() + people[start+1:].lower()
            wavearr.append(person)
            person = ""
            start += 1
        elif start > 0 and start < len(people)-1 and people[i].isalpha():
            person = people[0:start].lower() + people[start].upper() + people[start+1:].lower()
            wavearr.append(person)
            person = ""
            start += 1
        elif start == len(people)-1 and people[i].isalpha():
            person = people[:start].lower() + people[start].upper()
            wavearr.append(person)
    return wavearr


# Created empty array 'wavearr' to store our results
# Created variable 'start' to store the value of the index that should be capitalized
# Created empty string 'person' to concatenate to later

# We first check if people is not empty, and return an 'wavearr' as an empty array if it is
# Loop through the indexes of our string if it exists

#For each index of people, we check if it is a space or a letter
# Each time we find a space we increment our 'start' variable to keep the correct index for the capital letter

# If the index is in the beginning, middle, or end of the string and is a letter
# we perform a series of slice and concat operations
# Once the string is sliced we assign it to 'person' and append it to our 'wavearr'
# By re-assigning person to an empty string we ensure the next iteration will only capture the current position being processed

#Once we have looped through our string we can return 'wavearr'




print(wave("test ing"))
print(wave("a  b"))
print(wave("  ga p"))