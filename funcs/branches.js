const { print } = require("../utils/printUtils");
/*
    Consider this puzzle: by starting from the number 1 and repeatedly 
    either adding 5 or multiplying by 3, an infinite set of numbers can 
    be produced. How would you write a function that, given a number, 
    tries to find a sequence of such additions and multiplications that 
    produces that number?
*/

const Solution = (target) => {
    const find = (current, history) => {
        if (current === target) {
            return history;
        }
        else if(current > target) {
            return null;
        }
        else {
            return  find(current + 5, `(${history} + 5)`) || 
                    find(current * 3, `(${history}) * 3`);
        }
    };

    return find(1, "1");
};

print(Solution(24));
print(Solution(26));