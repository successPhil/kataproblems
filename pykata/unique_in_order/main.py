def unique_in_order(sequence):
    #Creating empty array to hold values
    unique = []
    #Looping through our given sequence
    for i in range(0, len(sequence), 1):
    #Check if the letter is not already in unique and add it if its not
        if sequence[i] not in unique:
            unique.append(sequence[i])
    #Check the last index of unique and make sure it is not the letter in the sequence we are on
    #If it is not the same as our last number, append it
        elif sequence[i] != unique[-1]:
            unique.append(sequence[i])
    return unique