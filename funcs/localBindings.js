const {print} = require("../utils/printUtils");

// this is an example of closures
// closures let us use functions in a very creative way:
const wrapValue = (n) => {
    let local = n;
    return () => local;
};

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

print(wrap1());
print(wrap2());

// here we define a closure as multiplier,
// and then we can create functions that define factors:
const multiplier = (factor) => {
    return number => number * factor;
};

// twice() and thrice() are functions that define factors
// in the multiplier:
let twice = multiplier(2);
let thrice = multiplier(3);

// now you can use these functions and pass numbers to them:
print(twice(5));    // -> 10
print(thrice(5));   // -> 15

// Brilliant!

// okay lets have some fun.

var one, two, three, four, five, six, seven, eight, nine, ten;
var multipliers = [one, two, three, four, five, six, seven, eight, nine, ten];

const bindMultipliers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = multiplier(i + 1);
    }

    return arr;
};

multipliers = bindMultipliers(multipliers);

const getTable = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
        print(arr[i](num));
    }
};

getTable(2, multipliers);