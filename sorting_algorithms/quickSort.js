//The most used algorithm
// Complexity of O(n log n), and faster than merge sort (since quick sort has smaller constant than merge sort)
// Uses D&C approach to problem solving


function ArrayList() {
    let array = [];

    this.insert = function (item) {
        array.push(item)
    };

    this.toString = function () {
        console.log(array.join());
        // join method joins the elements of an array into a string and returns the string
        return array.join();
    };

    this.quickSort = function() {
        quick(array,0,array.length-1);
    };

    let quick = function(array,left,right) {
        let index;

        if (array.length > 1) {
            index = parition(array,left,right);

            if (left < index -1) {
                quick(array,left, index-1);
            }

            if (index < right) {
                quick(array, index,right);
            }
        }
    };

    //The partition process
    let parition = function(array,left,right) {
        let pivot = array[Math.floor((right+left)/2)],
            l = left,
            r = right;

        while (l <= r) {
            while (array[l] < pivot) {
                l++;
            }
            while (array[r] > pivot) {
                r--;
            }
            if ( l <= r) {
                swapQuickSort(array,l,r);
                l++;
                r--;
            }
        }

        console.log(l);
        return l;
    };

    let swapQuickSort = function(array, index1, index2) {
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }
}

// Testing quick sort

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

array.quickSort();
console.log(array.toString());