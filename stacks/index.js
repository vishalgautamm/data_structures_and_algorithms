"use strict";

// creating a stack
function Stack() {
    var items = [];

    // push method: responsible for adding new item in the stack
    this.push = function(value) {
        items.push(value)
    };
    // pop: this is responsible for removing the last item from the top of the stack
    this.pop = function() {
        return items.pop()
    };
    // peek: returns the last item from the top of the stack
    this.peek = function() {
        return items[items.length - 1];
    };
    // returns true if the stack is empty
    this.isEmpty = function() {
        return (items.length === 0)
    };

    // size: returns how many elements does the stack contain
    this.size = function() {
        return items.length
    };

    // clear method: empties the stack
    this.clear = function() {
        items = [];
    }
    // helper function to print the content of the stack in the console
    this.print = function() {
        console.log(items.toString())
    }

    this.toString = function () {
        return items.toString()
    }
}

// testing
var myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.peek()
myStack.isEmpty()
myStack.size()
myStack.clear()
myStack.print()