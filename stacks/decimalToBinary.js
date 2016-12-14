function baseConverter (decNumber, base) {
    var remStack = new Stack();
    var rem;
    var binaryString = '';

    while (decNumber >0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/base);
    }

    while (!remStack.isEmpty) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));