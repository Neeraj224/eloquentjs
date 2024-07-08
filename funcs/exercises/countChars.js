const { print } = require("../../utils/printUtils");

const countBs = (text) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'B') {
            count += 1;
        }
    }

    return count;
};

const countChars = (text, charToCount) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === charToCount) {
            count += 1;
        }
    }

    return count;
};

const newCountBs = (text) => {
    return countChars(text, "B");
}

print(countBs("HHhahahBbhbhasbdBBBha"));
print(countChars("HHhahahBbhbhasbdBBBha", "h"));
print(newCountBs("HHhahahBbhbhasbdBBBha"));