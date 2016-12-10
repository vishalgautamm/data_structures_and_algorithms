//Listed List constructor Function

function LinkedList () {
    this.head = null;
    this.tail = null;
}

//Node constructor function
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// Add a node to the head and tail of our LinkedList
LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

// Create a method to remove head from our LinkedList
LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};

// Create a remove tail method
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var tailVal = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return tailVal;
};

// Implement a search method
LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};


// returns the index of enter value
LinkedList.prototype.indexOf = function(value) {
    var indexArr = [];
    var currIndex = 0;
    var currentNode = this.head;
    while(currentNode) {
        if (currentNode.value === value) {
            indexArr.push(currIndex)
        }
        currentNode = currentNode.next;
        currIndex++
    }
    return indexArr;
};

// test
var ll = new LinkedList();

ll.addToTail(100);
ll.addToTail(50);
ll.addToTail(25);
console.log(ll.search(5))
