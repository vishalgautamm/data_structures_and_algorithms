function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// Insert Method
BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value)
    }

    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value)
    }
}

//Contains Method
BST.prototype.contains = function (value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
    }

    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
}

// Depth First traversal function
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if( order === 'pre-order') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);

};

// Breadth first traversal function

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var queue = [this];
    while(queue.length) {
        var treeNode = queue.shift(); // this will take the fist node out of queue and save it in treeNode
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }

}

// Get min value method

BST.prototype.getMinVal = function (iteratorFunc) {
    if (this.left) return this.left.getMinVal();
    else return this.value;
};

// Get max value method

BST.prototype.getMaxVal = function (value) {
    if (this.right) return this.right.getMaxVal();
    else return this.value;

};


// Testing
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// iterator function that logs out the value of each node as it traverses
// function log(value) {
//   console.log(value)
// }

function logb(node) {
    console.log(node.value);
}

bst.getMinVal();
