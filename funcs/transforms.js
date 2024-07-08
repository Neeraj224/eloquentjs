const print = (x) => {
    console.log(x);
};

const printArray = (x) => {
    for (let i = 0; i < x.length; i++) {
        print(x[i]);
    }
};

// some basic transformations on numeric data
const transformScale = (element) => {
    return element * 2;
};

const transformReduce = (element) => {
    return element / 2;
};

const transformConverge = (element) => {
    element = 0;
    return element;
};

// an array to hold all these functions:
const transforms = [
    transformScale,
    transformReduce,
    transformConverge
];

// lets generate some random data:
const genData = (table, count, range) => {
    if (count === -1) {
        return table;
    }
    else {
        table.push(Math.floor(Math.random() * range));
        return genData(table, count - 1, range);
    }
};

var table = [];
table = genData(table, 10, 10);
print(table);

var transformedData = [];

for (let i = 0; i < table.length; i++) {
    let currentData = [];
    
    for (let j = 0; j < transforms.length; j++) {
        currentData.push(transforms[j](table[i]));
    };

    transformedData.push(currentData);
}

transformedData[0].length > 1 ? printArray(transformedData) : print(transformedData);