
num = 8119

# def squareEveryNum(num):
#     answer = ""
#     for i in str(num):
#         answer += str(int(i)**2)
#     return int(answer)

def squareEveryNum (num):
    answer = ""
    answer += ''.join(str(int(i)**2) for i in str(num))
    return answer
print(squareEveryNum(num))

