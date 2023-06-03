def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    miriams_job = numbers[:]
    miriams_job.remove(min(miriams_job))
    return miriams_job
    
    raise NotImplementedError("TODO: remove_smallest")