const {print, printArray, printMatrix} = require("../../utils/printUtils");


const range = (start, end, step) => {
    let ranges = [];

    if (step === undefined) {
        for (let i = start; i < end + 1; i++) {
            ranges.push(i);
        }
    }
    else {
        if (start < end) {
            for (let i = start; i < end + 1; i += step) {
                ranges.push(i);
            }
        }
        else {
            for (let i = start; i > end - 1; i += step) {
                ranges.push(i);
            }
        }
    }

    return ranges;
};

const sum = (array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total; 
};

print(range(1, 10));
print(range(1, 10, 2));
print(range(5, 2, -1));

print(sum(range(1, 10)));