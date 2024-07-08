const { print, printArray, printMatrix } = require("../utils/printUtils");

// Global variables:
var historyStack = [];

const checkStateStatus = (state, list) => {
    if (list.length === 0) {
        return true;
    }
    else {
        for (let entry of list) {
            if (state[0] == entry[0] && state[1] == entry[1]) {
                print("State already exists.");
                return false;
            }
        }
        return true;
    }  
};

const saveState = (currentState, stateList) => {
    if (checkStateStatus(currentState, stateList) === false) {
        print("Cannot add state, already exists.");
        return false;
    }
    else {
        stateList.push(currentState);
        return true;
    }
};

const extractStates = (current, zeroList, history) => {
    if (current === zeroList.length) {
        return history;
    }
    else {   
        for (let i = 0; i < zeroList.length; i++) {
            let dummyState = [zeroList[current], zeroList[i]];

            if (saveState(dummyState, history) === false) {
                continue;
            }
            else {
                // actually do nothing because saveState() internally
                // already pushes the state on to the history stack
                continue;
            }
        }

        return extractStates(current + 1, zeroList, history);
    }
};


var zeroList = [1, 2, 3, 1, 5];
// ! from the zeroList, [1,1] will be tried to get added twice, but the extractStates() 
// ! method won't let them, since it already has it in the historyStack

historyStack = extractStates(0, zeroList, historyStack);
printMatrix(historyStack);

/*
current stack:

┌─────────┬───┬───┐
│ (index) │ 0 │ 1 │
├─────────┼───┼───┤
│    0    │ 1 │ 1 │
│    1    │ 1 │ 2 │
│    2    │ 1 │ 3 │
│    3    │ 1 │ 5 │
│    4    │ 2 │ 1 │
│    5    │ 2 │ 2 │
│    6    │ 2 │ 3 │
│    7    │ 2 │ 5 │
│    8    │ 3 │ 1 │
│    9    │ 3 │ 2 │
│   10    │ 3 │ 3 │
│   11    │ 3 │ 5 │
│   12    │ 5 │ 1 │
│   13    │ 5 │ 2 │
│   14    │ 5 │ 3 │
│   15    │ 5 │ 5 │
└─────────┴───┴───┘
*/

// ! now if we redefine zeroList with te following:
zeroList = [1, 2, 4, 1];

// ! since it already has pairs built with 1, 2 and another 1 (which in itself is pretty 
// ! redundant), it will only add the pairs built with 4 (the new number!)

historyStack = extractStates(0, zeroList, historyStack);

// ! we can check that by printing the stack:
printMatrix(historyStack);

/*

stack now:

┌─────────┬───┬───┐
│ (index) │ 0 │ 1 │
├─────────┼───┼───┤
│    0    │ 1 │ 1 │
│    1    │ 1 │ 2 │
│    2    │ 1 │ 3 │
│    3    │ 1 │ 5 │
│    4    │ 2 │ 1 │
│    5    │ 2 │ 2 │
│    6    │ 2 │ 3 │
│    7    │ 2 │ 5 │
│    8    │ 3 │ 1 │
│    9    │ 3 │ 2 │
│   10    │ 3 │ 3 │
│   11    │ 3 │ 5 │
│   12    │ 5 │ 1 │
│   13    │ 5 │ 2 │
│   14    │ 5 │ 3 │
│   15    │ 5 │ 5 │
│   16    │ 1 │ 4 │
│   17    │ 2 │ 4 │
│   18    │ 4 │ 1 │
│   19    │ 4 │ 2 │
│   20    │ 4 │ 4 │
└─────────┴───┴───┘
*/
