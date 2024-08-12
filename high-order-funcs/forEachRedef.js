const { print, printArray } = require("../utils/printUtils");

// example forEach:
["A", "B"].forEach(l => print(l));

const forEachRed = (array, action) => {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
};

forEachRed(["A", "B"], print);