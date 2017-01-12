function ArrayList() {
    let array = [];

    this.insert = function(item) {
        array.push(item)
    };

    this.toString = function() {
        console.log(array.join());
        // join method joins the elements of an array into a string and returns the string
        return array.join();
    };

    this.mergeSort = function() {
        array = mergeSortRec(array);
    };

    let mergeSortRec = function(array) {
        let length = array.length,
            denom = 2;
        if (length < 2) { // (1) BASE CASE: Stop condition to check if the length of array is less than 2
            return array; // (2) if the condition is positie, then return the array with length of 1
        }

        let mid = Math.floor(length/denom), // (3) Finding the middle of the array
            left = array.slice(0,mid), // (4) Splitting the arrays into two smaller arrays called left and ...
            right = array.slice(mid,length); // (5) right

        return merge(mergeSortRec(left), mergeSortRec(right)); // (6) call the merge function. Responsible for merging and sorting the smaller arrays into bigger ones
    };

    // Implementing merge function
    let merge = function(left,right) {
        let result = [],
            il = 0,
            ir = 0;


        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        console.log(result);

        return result;

    }

}

// testing
function createNonSortedArray(size) {
    let array = new ArrayList();
    for (let i = size; i>0;i--) {
        array.insert(i);
    }

    return array;
}

let array = createNonSortedArray(10);
console.log(array.toString());

// array.bubbleSort()
// console.log(array.toString())

array.mergeSort();
console.log(array.toString());