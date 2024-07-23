const { print, printArray, printMatrix } = require("../../utils/printUtils");

const reverseNormal = (arr) => {
    let reversed = [];

    for (let i = arr.length - 1; i > -1; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
};

const reversedInPlace = (arr) => {
    let near = 0;
    let far = arr.length - 1;
    
    while (near <= far) {
        let temp = arr[near];
        arr[near] = arr[far];
        arr[far] = temp;

        near += 1;
        far -= 1;
    }

    return arr;
};

print(reverseNormal([10, 20, 30, 40, 50]));
print(reversedInPlace([10, 20, 30, 40, 50, 60]));