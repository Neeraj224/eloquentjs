const { print, printArray, printObject } = require("../../utils/printUtils");

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        }
    }
};

printObject(list);

const buildListFromArray = (array) => {
    let list = null;

    // we start from the last, and then
    // keep moving to the previous one, appending
    // the list to its rest property:
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i], 
            rest: list // in the second iteration, this will be appending the previous list!
        };
    }

    return list;
};

const arrayToList = (array) => {
    let list = null;
    let prevList = list;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: prevList};
        prevList = list;
    }

    return list;
};

printObject(arrayToList([10, 20, 30, 40, 50]));

const buildArrayFromList = (list) => {
    let array = [];
    let node;

    for (node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
};

const listToArray = (list) => {
    let array = [];

    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
};

print(listToArray({"value":10,"rest":{"value":20,"rest":{"value":30,"rest":{"value":40,"rest":{"value":50,"rest":null}}}}}));

const prepend = (value, list) => {
    return {value: value, rest: list};
};

const nth = (list, n) => {
    if (!list) {
        return undefined;
    }
    else if (n == 0) {
        return list.value;
    }
    else {
        return nth(list.rest, n - 1);
    }
};

printObject(buildListFromArray([1, 2, 3]));
print(buildArrayFromList(list));

printObject((prepend(10, prepend(20, null))));

print((nth(buildListFromArray([10, 20, 30]), 1)));