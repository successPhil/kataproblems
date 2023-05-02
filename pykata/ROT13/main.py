def rot13(message):
    decrypted = ""
    for char in message:
        if 'a' <= char <= 'z':
            decrypted += chr((ord(char) - ord('a') + 13) % 26 + ord('a'))
        elif 'A' <= char <= 'Z':
            decrypted += chr((ord(char) - ord('A') + 13) % 26 + ord('A'))
        else:
            decrypted += char
    return decrypted

print(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."))


#Learned that you can reference charcode directly through comparisions in python
# This is great because you do not need to remember the charcodes for letters
