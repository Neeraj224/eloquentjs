const { print, printArray } = require("../utils/printUtils");

const getElementCount = (arr, elem) => {
    var count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (elem == arr[i]) {
            count += 1;
        }
    }

    return count;
};

const uniquify = (arr) => {
    let uniquified = [];

    if (arr.length === 0) {
        return uniquified;
    }

    if (arr.length === 1) {
        uniquified.push(arr[0]);
        return uniquified;
    }

    uniquified.push(arr[0])

    for (let i = 1; i < arr.length; i++) {
        if (isAlreadyPresent(uniquified, arr[i]) === true) {
            continue;
        }
        else {
            uniquified.push(arr[i]);
        }
    }

    return uniquified;
};

const isAlreadyPresent = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (elem === arr[i]) {
            return true;
        }
    }

    return false;
};

const getCountsForArray = (arr) => {
    let counts = [];
    
    arr.sort();
    
    for (let i = 0; i < arr.length; i++) {
        counts.push(`${arr[i]}: ${getElementCount(arr, arr[i])}`);
    }

    return counts;
};

let arr = [1, 2, 1, 2, 2, 5, 5, 5, 7, 8, 8, 7, 0];

var arrCountMap = uniquify(getCountsForArray(arr));

printArray(arrCountMap);