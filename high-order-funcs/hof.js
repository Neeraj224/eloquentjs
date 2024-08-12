const { print, printMatrix, printObject } = require("../utils/printUtils");

const arrayToList = (array) => {
    let list = null;
    let prevList = list;
    
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            data: array[i],
            next: prevList
        };

        prevList = list;
    }

    return list;
};

const greaterThan = (n) => {
    return m => m > n;
};


 

printObject(arrayToList([143, 41, 4, 81]));