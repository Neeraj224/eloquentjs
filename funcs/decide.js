const { print, printArray } = require("../utils/printUtils");

const isPresent = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (elem === arr[i]) {
            return true;
        }
    }

    return false;
};

const decide = (arr, taken, idx) => {
    if (idx === arr.length) {
        return taken;
    }
    else {
        if (arr[idx] == 0) {
            taken.push("DO NOT TAKE");
        }
        else if (arr[idx] == 1) {
            taken.push("TAKE");
        }
        else {
            taken.push("____");
        }

        return decide(arr, taken, idx + 1);
    }
}

var arr = [1, 92, 4, 1, 0, 82, 0, 1, 93, 2, 1, 1];
var decideDP = [];
decideDP = decide(arr, decideDP, 0);

print(decideDP);


const pickNums = (arr, picked, idx) => {
    if (idx === arr.length) {
        return picked;
    }
    else {
        if (isPresent(picked, arr[idx]) === true) {
            return pickNums(arr, picked, idx + 1);
        }
        else if (isPresent(picked, arr[idx]) === false) {
            picked.push(arr[idx]);
            return pickNums(arr, picked, idx + 1);
        }
    }
};

var randomNums = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 0];
var rNumsDP = [];
rNumsDP = pickNums(randomNums, rNumsDP, 0);

print(rNumsDP);
