const { print, printArray } = require("../utils/printUtils");
const SCRIPTS = require("../datasets/scripts");

function reduce(array, combine, start) {
    let current = start;

    for (let element of array) {
        current = combine(current, element);
    }

    return current;
}

print(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// in built reduce():
print([1, 2, 3, 4, 5].reduce((a, b) => a + b));

