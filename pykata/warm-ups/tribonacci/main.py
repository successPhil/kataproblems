def tribonacci(signature, n):
    if n == 0:
        return []
    start = signature[:]
    
    if n <= 3:
        return start[:n]
    if n > 3:
        startidx = 3
        while len(start) < n:
            start.append(sum(start[startidx-3:startidx]))
            startidx += 1
    return start