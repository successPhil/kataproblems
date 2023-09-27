def get_letters(letters):
    start = ord(letters[0])
    end = ord(letters[1])
    newStr = ""
    for letter in range(start, end + 1):
        newStr += chr(letter)

    return f"{newStr}"

print(get_letters('AP'))


