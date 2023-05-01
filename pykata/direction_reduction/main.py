def dirReduc(arr):
    dirs = []
    opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }
    for dir in arr:
        if dirs and dirs[-1] == opposites[dir]:
            dirs.pop()
        else: dirs.append(dir)
    return dirs