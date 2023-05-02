def solution(arr):
    result = ""
    i = 0
    while i < len(arr):
        start = arr[i]
        end = arr[i]
        while i + 1 < len(arr) and arr[i+1] == arr[i] + 1:
            end = arr[i+1]
            i += 1
        
        if end - start >= 2:
            result += str(start) + "-" + str(end) + ","
        elif end - start == 1:
            result += str(start) + "," + str(end) + ","
        else:
            result += str(start) + ","
        
        i += 1
    
    return result.rstrip(",")
