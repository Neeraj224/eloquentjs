const { print, printArray } = require("../utils/printUtils");

const performOperations = (operations, data) => {
    var log = [["init", data]];
    var result = data;
    var idx = 0;
    
    while (idx < operations.length) {
        if (operations[idx] == "double") {
            result += result;
            log.push(["double", result]);
        }
        else if (operations[idx] == "half") {
            result /= 2;
            log.push(["half", result]);
        }
        else if (operations[idx] == "increment") {
            result += 1;
            log.push(["increment", result]);
        }
        else if(operations[idx] == "decrement") {
            result -= 1;
            log.push(["decrement", result]);
        }
        else if (operations[idx] == "reduce") {
            // since reduce will just divide the number by itself
            // result /= result, we might as well just make it 1:
            result = 1;
            log.push(["reduce", result]);
        }
        else {
            continue;
        }

        idx += 1;
    }

    return [log, result];
};

const driverCode = (operations, data) => {
    var log = [];
    var result = 0;

    log = performOperations(operations, data)[0];
    printArray(log);

    result = performOperations(operations, data)[1];
    print(result);
}

driverCode(["double", "double", "increment"], 1);
driverCode(["increment", "double", "increment", "increment", "half", "decrement"], 24);
driverCode(["increment", "double", "reduce"], 27);