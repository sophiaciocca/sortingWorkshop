function split(wholeArray) {

    //find index at which we'll split wholeArray
    var splitIndex = Math.ceil(wholeArray.length / 2);

    var firstHalf = wholeArray.slice(0, splitIndex);
    var secondHalf = wholeArray.slice(splitIndex);

    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {

    var sortedArray = [];

    var length = arr2.length + arr1.length;

    //loop over the arrays (one of their lengths)
    //compare the first element of each, determine which is lower, & push onto sortedArray
    for (var i = 0; i < length; i++) {    
        //edge cases for uneven arrays
        if (!arr1.length) {
            sortedArray.push(arr2.shift());
        }
        else if (!arr2.length) {
            sortedArray.push(arr1.shift());
        }
        //actual normal sorting
        else if (arr1[0] < arr2[0]) {
            sortedArray.push(arr1.shift());
        }
        else {
            sortedArray.push(arr2.shift());
        }
    }

    return sortedArray;
}

function mergeSort(array) {

    //otherwise, recurse
    if (array.length > 1) {

        var children = split(array);
        //console.log("children:", children.toString());
        var sortedLeft = mergeSort(children[0]);
        var sortedRight = mergeSort(children[1]);
        return merge(sortedLeft, sortedRight);

    }
    //basecase: arrays are only 1 (already sorted)
    else {
        return array;

    }


}