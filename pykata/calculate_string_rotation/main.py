first = "coffee"
second = "ffeeco"

def shifted_diff(first, second):
    count = 0
    if first == second:
        return 0
    # if len(first) == len(second):
    #     for char in range(len(first)):
    #         shifted = first[-char:] + first[:-char]
    #         print(shifted)
    #         if shifted == second:
    #             return char

#Learning about list comprehension
#The above loop can be simplified using list comp
    shifted = [char for char in range(len(first)) if first[-char:] + first[:-char] == second]
    print(shifted)
    return shifted[0] if shifted else -1
            

print(shifted_diff(first, second))
        