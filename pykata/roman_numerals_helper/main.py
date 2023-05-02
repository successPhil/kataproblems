class RomanNumerals:
    romanMap = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
        }
    numbersMap = {value: key for key, value in romanMap.items()}
    @staticmethod
    def to_roman(val):
        toromanstr = ""
        for num, letter in RomanNumerals.romanMap.items():
            while num <= val:
                toromanstr += letter
                val -= num
        return toromanstr
    @staticmethod
    def from_roman(roman_num):
        tonumber = 0
        i = 0
        while i < len(roman_num):
            if i + 1 < len(roman_num) and roman_num[i:i+2] in RomanNumerals.numbersMap:
                tonumber += RomanNumerals.numbersMap[roman_num[i:i+2]]
                i += 2
            else:
                tonumber += RomanNumerals.numbersMap[roman_num[i]]
                i += 1
        return tonumber
    

print(RomanNumerals.from_roman('XL'))
print(RomanNumerals.to_roman(2315))

#Asked to write two functions to convert between digits and roman numerals
#We create a map of digit to roman numeral (key pairs) outside of our functions
#romanMap , is intentionally built from greatest to least value so that when we iterate we will always take the greatest match

#if to_roman is called we assign a empty string to toromanstr
#We then iterate through the romanMap and add the greatest key 'letter' to toromanstr
#Each time we add to toromanstr we decrement our given number val, by the value in our map for the current letter
#When the loop completes we return the converted string

#if from_roman is called we assign a variable for a total called tonumber with a value of 0
#We also initialize i with a value of 0 to give us a starting index for our while loop
#We make a while loop that runs while i is less than the length of our string
#We then check for a substring of length 2 because some of our map keys are of length 2
#If we find a match in the substring of length 2 against our map, we add the value from our map to tonumber
#We then will increment by 2 so that we are not checking characters that were part of our previous substring

#If the string is not length 2 we instead just check the character at our current index against our map


#The problem was setup with the Class RomanNumerals: and both functions predefined.
#I decided to create the object outside the function because I wanted to use it again later without rebuilding it
#We used list comprehension to rebuild it as a copy of our object just with values,keys instead of keys,values
#I learned that to access an object defined in a class you have to 'call' it buy its class first
#this is why we have RomanNumerals.romanMap etc
#Note this was not the case in our list comprehension, I believe this is because it is defined within the same class

