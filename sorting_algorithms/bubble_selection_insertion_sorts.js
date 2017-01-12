function ArrayList() {
    const array = [];

    this.insert = function(item) {
        array.push(item);
    }

    this.toString = function() {
        // join method joins the elements of an array into a string and returns the string
        return array.join();
    }

    var swap = function(indexA, indexB) {
        var aux = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = aux;
    }

    // Bubble Sort implementation: Running Time - O(n^2)
    this.bubbleSort = function() {
        var length = array.length;
        for (i=0;i<length;i++) {
            for (j=0;j<length-1;j++) {
                if (array[j] > array[j+1]) {
                    swap(j, j+1);
                }
            }
        }
    };

    // a Modified version of bubbleSort
    this.modifiedBubbleSort = function() {
        var length = array.length;
        for (i=0;i<length;i++) {
            for (j=0;j<length-1-i;j++) {
                if (array[j] > array[j+1]) {
                    swap(j,j+1)
                }
            }
        }
    }

    //Selection Sort Implementation: Running Time - O(n^2)
    this.selectionSort = function() {
        var length = array.length;
        var indexMin;

        for (var i = 0; i< length-1;i++) {
            indexMin = i;
            for (j=i; j<length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }

            if (i !== indexMin) {
                swap(i,indexMin);
            }
        }
    };

    //insertion Sort Implementation
    // Better performance than the selection and bubble sort algorithms when sorting small algorithms
    this.insertionSort = function() {
        var length = array.length;
        var j;
        var temp;

        for (i=1;i<length;i++) {
            j = i;
            temp = array[j];

            while(j>0 && array[j-1] > temp) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    };

}


// testing
function createNonSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i>0;i--) {
        array.insert(i);
    }

    return array;
}

var array = createNonSortedArray(5);
console.log(array.toString())

// array.bubbleSort()
// console.log(array.toString())

array.insertionSort()
console.log(array.toString())