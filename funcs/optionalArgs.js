// using the require function, you can import a function/or anything
// in vanilla JS (ig?)
const { print, printArray } = require("../utils/printUtils");

const sq = x => x * x;

print(sq(2)); // this will definitely work
print(sq(3, true, "pineapple"));    // and so will this, even wiht the extra arguments!

// ! so while calling a function, we do not need to pass
// ! all the arguments the function definition requires.
// ! we can simply pass just one, and the others will
// ! considered as 'undefined'.
const minus = (a, b) => {
    // ? as you can see, we can use it to our advantage:
    if (b === undefined) {
        return -a;
    }
    else {
        return a - b;
    }
};

print(minus(10)); // -> -10
print(minus(10, 5)); // -> 5

// ! in this function if we do not specify 
// ! the exp in the definition, then
// ! instead of being taken as undefined it will
// ! be taken as the default value decied (i.e. 2):
const power = (base, exp = 2) => {
    let res = 1;

    for (let i = 0; i < exp; i++) {
        res *= base;
    }

    return res;
};

print(power(4)); // -> 16
print(power(2, 3)); // -> 8

print("C", "O", 2); // -> this will only give you 'C'
console.log("C", "O", 2); // -> this will give 'C O 2'