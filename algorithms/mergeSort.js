/*

Merge Sort: Pseudo Code
- Recursively sort first half of the input array
- Recursively sort second half of the input array
- Merge two sorted sublists into one

 Merge Sort: Running Time

 - The Merge Sort has a


*/

function mergeSort(arr) {
    if (arr.length <2) return arr;

    var midPoint = Math.round(arr.length/2);

    return merge(
        mergeSort(arr.slice(0,midPoint)),
        mergeSort(arr.slice(midPoint))
    )
}

function merge(leftArr, rightArr) {

    var resultArr = [];

    while(leftArr.length && rightArr.length) {
        resultArr.push(leftArr[0] <rightArr[0] ? leftArr.shift() : rightArr.shift());
    }

    while(leftArr.length) {
        resultArr.push(leftArr.shift());
    }

    while(rightArr.length) {
        resultArr.push(rightArr.shift());
    }

    return resultArr;
}


// test
mergeSort([1,2,6,7,11,3,12,78,123,45]);
