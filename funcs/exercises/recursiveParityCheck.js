const { print } = require("../../utils/printUtils");

const recursiveParityCheck = (num) => {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return recursiveParityCheck(Math.abs(num - 2));
    }
};

print(recursiveParityCheck(50));
print(recursiveParityCheck(75));
print(recursiveParityCheck(-2));