function bubbleSort(array) {
    var copy = array.slice();
    var unsortedLength = copy.length;
    while (unsortedLength > 1){
        for (var i = 0; i < unsortedLength - 1; i ++){
            if (copy[i] > copy[i + 1]){
                var swapArray = swap(copy[i], copy[i + 1]);
                copy[i] = swapArray[0];
                copy[i + 1] = swapArray[1];
            }
        }
        unsortedLength --;
    }
    return copy;
}

function swap(elem1, elem2) {
    return [elem2, elem1];
}