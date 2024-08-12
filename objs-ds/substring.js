const { print, printArray, printMatrix } = require("../utils/printUtils");

const isInArray = (arr, subs) => {
    if (arr.includes(subs)) {
        return true;
    }
    return false;
};

const getSubs = (str, idx, limit, subs) => {
    if (idx == limit + 1) {
        return subs;
    }  
    else {
        let subc = "";
        
        for (let j = idx; j < str.length; j++) {
            subc += str[j];

            if (isInArray(subs, subc) == false) {
                subs.push(subc);
            } 
        }
        
        return getSubs(str, idx + 1, limit, subs);
    }
};

print(getSubs("abcba", 0, "abcba".length, []));
