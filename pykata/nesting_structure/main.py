def same_structure_as(arr1,arr2):
    if not isinstance(arr1, list) or not isinstance(arr2, list):
        return False
    if len(arr1) != len(arr2):
        return False
    for elem1, elem2 in zip(arr1, arr2):
        if isinstance(elem1, list) and isinstance(elem2, list):
            if not same_structure_as(elem1, elem2):
                return False
        elif isinstance(elem1, list) or isinstance(elem2, list):
            return False
    return True

print(same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] )) # => True
print(same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )) # => True

print(same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )) # => False
print(same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] )) # => False

print(same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )) # => True

print(same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )) # => False