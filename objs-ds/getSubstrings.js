const { print, printArray, printMatrix } = require("../utils/printUtils");

const isInArray = (arr, substring) => {
    if (arr.includes(substring)) {
        return true;
    }
    return false;
};

const getSubstrings = (str, idx, limit, substrings) => {
    if (idx === limit + 1) {
        return substrings;
    }  
    else {
        let currentSubstring = "";
        
        for (let j = idx; j < str.length; j++) {
            currentSubstring += str[j];

            if (isInArray(substrings, currentSubstring) == false) {
                substrings.push(currentSubstring);
            } 
        }
        
        return getSubstrings(str, idx + 1, limit, substrings);
    }
};

const driverCode = (substring) => {
    let l = substring.length;
    let substrings = [];
    let START_INDEX = 0;

    print(getSubstrings(substring, START_INDEX, l, substrings));
};

driverCode("ababbc")
driverCode("abbabbbcc");
driverCode("abbbababacc");


