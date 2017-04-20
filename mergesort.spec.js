describe('Split Array function', function() {

    it('is able to split an array into two halves', function() {         
        expect(split([1, 0])).toEqual([[1], [0]]);
    })

    it('is able to split odd-lengthed arrays, with the first one bigger', function() {         
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
    })

})


describe('Merging', function() {

    it('is able to merge two sorted arrays into one sorted array', function() {         
        expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    })

    it('is able to merge two arrays of different lengths', function() {         
        expect(merge([1, 3, 5, 8], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 8]);
    })

    it('is able to merge really jumbled arrays', function() {         
        expect(merge([1, 100, 258, 1000], [2, 3, 4])).toEqual([1, 2, 3, 4, 100, 258, 1000]);
    })

})


describe('Merge Sort Function', function() {

    it('sorts an empty array', function() {         
        expect(mergeSort([])).toEqual([]);
    })

    it('sorts an array already in order', function() {         
        expect(mergeSort([1, 3, 8, 14, 20])).toEqual([1, 3, 8, 14, 20]);
    })

    it('sorts an unsorted array', function() {         
        expect(mergeSort([5, 3, 9, 100, 57, 436, 2])).toEqual([2, 3, 5, 9, 57, 100, 436]);
    })

})
