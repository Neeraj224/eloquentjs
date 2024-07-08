const { print } = require("../../utils/printUtils");

const min = (x, y) => {
    if (x > y) {
        return y;
    }
    else {
        return x;
    }
};

print(min(-2, 2));

const minOfList = (arr, current, currentMin) => {
    if (current === arr.length) {
        return currentMin;
    }
    else {
        currentMin = min(currentMin, arr[current]);
        return minOfList(arr, current + 1, currentMin);
    }
}

var randomList = [1, 2, 0, -9999, 78, -99991, 997];
print(minOfList(randomList, 0, Infinity));