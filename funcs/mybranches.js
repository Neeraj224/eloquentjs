const { print, printArray, printMatrix } = require("../utils/printUtils");

var arr = [];

const branchOut = (startWith, num) => {
    var path = [];

    const findShortest = (current, target, path) => {
        if (current === target) {
            path.push(current);

            return path;
        }
        else if (current > target) {
            return null;
        }
        else {
            if (current == 0) {
                path.push(current);

                return  findShortest((current + 1) * 4, target, path) ||
                        findShortest((current + 1) + 2, target, path);
            }
            else {
                path.push(current);

                return  findShortest(current * 4, target, path) ||
                        findShortest(current + 2, target, path);
            }
        }
    };
    var path = [];
    return findShortest(startWith, num, path);
};

// this works, but im just commenting it out:
// this actually gives us an entire history of the path:
// print(branchOut(1, 13));


/*
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
*/

const producePairs = (current, limit, pairs, k) => {
    if (current === limit + 1) {
        return pairs;
    }
    else {
        let currentPair = [];

        for (let i = 0; i < k; i++) {
            currentPair.push(current + i);
        }
        pairs.push(currentPair);

        return producePairs(current + 1, limit, pairs, k);
    }
};

//printArray(producePairs(1, 10, [], 5));

const produceCombs = (current, combs, limit) => {
    if (current === limit + 1) {
        return combs;
    }
    else {
        let currentPair = [];

        for(let i = 1; i < limit + 1; i++) {
            currentPair.push([current, i]);
        }

        combs.push(currentPair);

        return produceCombs(current + 1, combs, limit);
    }
};

printMatrix(produceCombs(1, [], 5));