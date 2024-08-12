const print = (...x) => {
    /*
        ! This is a basic wrapper around console.log()
        ! simply because console.log() is just too lengthy to write.
    */
    console.log(...x);
};

const printMatrix = (mat) => {
    // ! this prints out the matrix as a table:
    console.table(mat);
};

const printArray = (x) => {
    /*
        ? Whenever Node encounters an array as an element of
        ? another array, it simply prints it as "Object(<sizeof(array)>)".
        ? so for that we have written a function that prints the elements
        ? of that inner array as well.
    */
    for (let element of x) {
        print(element);
    }
};

const deepPrint = (arr) => {
    /*
        ? We use this function to print deeply nested arrays
        ? in a flattened manner.
        ? Nothing more to it, nothing less to it.
    */
    for (let i  = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            deepPrint(arr[i]);
        }
        else {
            print(arr[i]);
        }
    }
    return;
};

const printObject = (obj) => {
    print(JSON.stringify(obj));
};

// this is how you need to export the functions from a
// vanilla JS file (i think?)
module.exports = {
    print,
    printArray,
    deepPrint,
    printMatrix,
    printObject
};
