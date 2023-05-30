def duplicate_encode(word):
    encoded = ""
    for char in word.lower():
        if word.lower().count(char) > 1:
            encoded += ")"
        else:
            encoded += "("
    return encoded
    
    
    #"Success"  =>  ")())())"
print(duplicate_encode("Success"))