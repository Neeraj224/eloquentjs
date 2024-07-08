const print = x => console.log(x);

const recursivePowerFunction = (base, exponent, current) => {
    if (exponent === 0) {
        return current;
    }
    else {
        current *= base;
        return recursivePowerFunction(base, exponent - 1, current);
    }
};

const iterativePowerFunction = (base, exponent) => {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
};

// current (the last parameter) should always be passed as 1
print(recursivePowerFunction(2, 4, 1));
print(iterativePowerFunction(2, 8));

// when there is only one parameter, we can omit the parantheses
// around the parameter list:
const square = x => { return x * x; };

// and if the body is a single expression, rather than the blocks
// in the braces, we can return that expression directly:
const cube = x => x * x * x;

print(square(2));
print(cube(2));
