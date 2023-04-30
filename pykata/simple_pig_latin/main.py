def pig_it(text):
    pigged = []
    for i in text.split(' '):
        if i.isalpha():
            pigged.append(i[1:] + i[0] + "ay")
        else: pigged.append(i)
    return ' '.join(pigged)

#Made an empty array to hold concat results
#Used split to iterate through 'words'
#for each word we first check if the 'word' is actually letters
#If it only contains letters, we will slice from index 1 to the end, and concat index 0 + 'ay' for the desired result
#If it does not contain only letters, we do not want to concat, so instead append i to the result array'pigged'