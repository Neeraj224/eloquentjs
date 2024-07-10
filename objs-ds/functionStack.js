const { print, printArray, printMatrix } = require("../utils/printUtils");

const functionStack = (operations, data) => {
    // if there are no operations mentioned
    if (operations.length == 0) {
        if (data.length == 0) {
            // and also no data given, just return null
            return null;
        }
        else {
            // else -1
            return -1;
        }
    }

    if (data.length == 0) {
        return -1;
    }

    // current function holds the function on top of the stack:
    var currentFunction = "";
    // our maintained stack:
    var stack = [];
    // idxOps, to iterate through the list of operations
    // idxData to iterate through the list of data
    var idxOps = 0;
    var idxData = 0;
    // a log of the stack operations and data pushed and popped:
    var history = "";

    // loop until we reach the end of either list:
    while (idxOps < operations.length && idxData < data.length) {
        if (operations[idxOps] == "call") {
            history += `${operations[idxOps]} -> ${data[idxData]}\n`;
            
            // first we push it on to the stack
            stack.push(data[idxData]);
            // and then update the stack pointer
            currentFunction = stack[stack.length - 1];

            // go to the next function
            idxData += 1;
            // and the next operation
            idxOps += 1;
        }
        else if (operations[idxOps] == "return") {
            history += `${operations[idxOps]} -> ${data[idxData - 1]}\n`;
            history += `${data[idxData - 1]} was popped\n\n`;
            // first we pop the current function on top of the stack:
            stack.pop();
            // then we update the pointer:
            currentFunction = stack[stack.length - 1];
            // and just go to the next operation
            idxOps += 1;
        }
        else {
            continue;
        }
    }

    if (stack.length === 0) {
        return -1;
    }

    return [currentFunction, history, stack];

};

const driverCode = (operations, data) => {
    var getLiterals = [];

    getLiterals = functionStack(operations, data);

    if (getLiterals != -1) {
        var topOfStack = "";
        var log = "";
        var stack = [];

        topOfStack = getLiterals[0];
        log = getLiterals[1];
        stack = getLiterals[2];

        print("--------------------------------------------------------");
        print(`the current function on top of the stack: ${topOfStack}`);
        print(`stack history:\n ${log}`);
        print("final stack:")
        for (let i = stack.length - 1; i >= 0; i--) {
            print(stack[i]);
        }
        print("--------------------------------------------------------");
        print("\n");
    }
    else {
        print("the function stack was returned empty");
    }
};

driverCode(["call", "call", "return", "call", "return", "call", "call"], ["funcOne()", "funcTwo()", "funcThree()", "funcFour()", "funcFive()"]);
driverCode(["call", "call", "call", "call", "call"], ["funcOne()", "funcTwo()"]);
driverCode(["call", "return"], ["funcOne()", "funcTwo()"]);