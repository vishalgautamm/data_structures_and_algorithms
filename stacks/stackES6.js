// Implementation of Stack using ES6 classes

class Stack {
    // consructor function. item array will store the elements of the stack
    constructor () {
        this.item = [];
    }

    // push: responsible for adding new item in the stack
    push(element) {
        this.item.push(element);
    }
    // pop: removes last item from the top of the stack
    pop() {
        return this.item.pop();
    }
    //peek: returns the last item from the top of the stack
    peek() {
        return this.item[this.item.length - 1];
    }
    // check if the stack is empty
    isEmpty() {
        return (this.item.length === 0);
    }
    // returns the length of the stack ( # of elements contained in stack)
    size() {
        return this.item.length;
    }
    // empties the stack
    clear () {
        this.item = [];
    }
    // logs out the items contained in the stack
    print() {
        console.log(this.item.toString());
    }
    // returns all the items
    toString() {
        return this.item.toString()
    }

}