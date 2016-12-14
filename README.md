# Data Structures


## Stacks
- An ordered collection of items that follow the LIFO (**Last In First Out**)
- The beginning of the stack is known as **base** and the ending is known as **top**
- First item entered is the base item and the last item is called the top item
- Real life examples of stack include: stacks of books, stacks of plate from the kitchen.

### Implementation of Stack in Javascript using ES6

#### Creating a Stack

**Step 1: Create a stack class**
- We will create a Stack class using the ES6 Classes
```javascript
class Stack {
    
};
```

**Step 2: Define a data structure that will store the elements of the stack**
- For this we will define a constructor function that will contain our array. the array will 
store all the elements of the Stack

```javascript
class Stack {
    constructor () {
        this.item = [];
    }
};
```
**Step 3: Declare methods**
- In this example we will declare the following methods
1. **insert** : This method add new item into the to of the stack
2. **remove** : Removes item from the top of the stack.
3. **peek** : Returns the item from the top of the stack.
4. **isEmpty** : Return true if the stack is empty. Otherwise returns false.
5. **size** : Returns the number of elements contained in stack
6. **clear**: Empties the stack
7. **print** : Logs out the item contained in the stack
8. **toString** : Returns all the items from the stack

```javascript

class Stack {

    constructor () {
        this.item = [];
    }
    insert(element) {
        this.item.push(element);
    }
    remove() {
        return this.item.pop();
    }
    peek() {
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        return (this.item.length === 0);
    }

    size() {
        return this.item.length;
    }

    clear () {
        this.item = [];
    }

    print() {
        console.log(this.item.toString());
    }

    toString() {
        return this.item.toString()
    }

}
```

## Linked Lists

 - Linked lists store a sequential collection of elements
 - Each element consists of a node that stores the element itself and also a reference (also known as a pointer or link) that points to the next element.
  
## Binary Search Tree

- A binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side.
  
## Hash Table

- Hashing consists of finding a value in a data structure in the shortest time possible.
- When we use a hash function, we already know which position the value is in, so we can simply retrieve it.
- A hash function is a function that given a key, and will return an address in the table where the value is.

# Algorithms

## Merge Sort

###Pseudo Code
- Recursively sort first half of the input array
- Recursively sort second half of the input array
- Merge two sorted sublists into one

### Analysis: Running Time
- The Merge Sort has a running time of N*log(N) 

