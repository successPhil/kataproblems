def dna_to_rna(dna):
    if len(dna) == 0:
        return ''
    rna = ''
    for letter in dna:
        if letter == 'T':
            rna += 'U'
        else:
            rna += letter
    return rna


print(dna_to_rna('GCAT')) # => GCAU