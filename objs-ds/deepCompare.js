const { print } = require("../utils/printUtils");

const deepCompare = (objA, objB) => {
    // ? if sizes do not match
    if (Object.keys(objA).length != Object.keys(objB).length) {
        print("The sizes do not match.");
        return false;
    }

    // get the keys
    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);

    // sort them for a deep comparison - no matter what
    // the sequence of keys is, if the content is same,
    // the objects are same:
    keysA.sort();
    keysB.sort();

    // iterate over them and check each condition:
    for (let i = 0; i < keysA.length; i++) {
        // ? if the keys themselves do not match at all:
        if (keysA[i] != keysB[i]) {
            print("The keys do not match.")
            return false;
        }
        // if any of the key is an array:
        else if (Array.isArray(objA[keysA[i]]) && Array.isArray(objB[keysB[i]])) {
            for (let j = 0; j < objA[keysA[i]].length; j++) {
                // ? if the elements of the array do not match at all:
                // ! NOTE: we do not sort these arrays!
                if (objA[keysA[i]][j] != objB[keysB[i]][j]) {
                    print("The array elements do not match.")
                    return false;
                }
            }
        }
        // if any of the key is another object:
        else if (typeof objA[keysA[i]] === "object" && typeof objB[keysB[i] === "object"]) {
            // thank god for recursion!
            if (deepCompare(objA[keysA[i]], objB[keysB[i]]) === false) {
                return false;
            }
        }
        // ? else just check the value of that key
        else if (objA[keysA[i]] != objB[keysB[i]]) {
            print("The key values do not match.")
            return false;
        }
    }
    // if everything is satisfied, then the objects are same!
    return true;
};

const getComparison = (a, b) => {
    print(deepCompare(a, b));
};

let objA = {
    variability: "hello",
    constancy: "wello",
    mean: "28"  
};

let objB = {
    variability: "hello",
    constancy: "wello",
    mean: "28"  
};

getComparison(objA, objB);

let objC = {
    anotherObj: {
        propA: 111, 
        propB: 22, 
        propC: 44
    },
    arrayD: [1, 2, 3],
    variability: "hello",
    constancy: "wello",
    mean: "28"  
};

let objD = {
    variability: "hello",
    arrayD: [1, 2, 3],
    constancy: "wello",
    anotherObj: {
        propA: 111, 
        propB: 22, 
        propC: 44
    },
    mean: "28"  
};

getComparison(objC, objD);

let objE = {
    anotherObj: {
        propA: 111, 
        propB: 22, 
        propC: 44
    },
    arrayD: [1, 2, 3],
    variability: "hello",
    constancy: "wello",
    mean: "28"  
};

let objF = {
    variability: "hello",
    arrayD: [1, 2, 3],
    constancy: "wello",
    anotherObj: {
        propA: 111, 
        propB: 2233, // this one is different
        propC: 44
    },
    mean: "28"  
};

getComparison(objE, objF);