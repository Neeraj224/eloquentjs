const { print } = require("../utils/printUtils");

// objects allow us to group values (atomic structures like
// numbers, bools and strings) - including other objects - to
// build more complex structures

const getOdds = (n) => {
    let count = 0;
    let index = 0;
    let odds = [];

    while (count < n) {
        if (index % 2 == 1) {
            odds.push(index);
            count += 1;
        }

        index += 1;
    }

    return odds;
};

var odds = [];
odds = getOdds(5);

print(odds);

let sequence = [1, 2, 3];

sequence.push(4);
sequence.push(5);

let current = sequence.pop();
print(current);