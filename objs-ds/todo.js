const { print, printArray, printMatrix } = require("../utils/printUtils");

// so this works like queue over here:
let todoList = [];

// add to queue
const remember = (task) => {
    todoList.push(task);
};

// remove from it - from the beginning of the queue:
const getTask = () => {
    // shift() removes an element to the start of the array(?)
    return todoList.shift();
};

// add to the beginning of the queue:
const rememberUrgently = (task) => {
    // unshift() adds to the start of the array:
    todoList.unshift(task);
}; 

const showTodo = () => {
    printMatrix(todoList);
};

remember("groceries");
remember("sleep");
showTodo();

rememberUrgently("assignments");
showTodo();

rememberUrgently("test prep");
showTodo();

getTask();
showTodo();

/**
 * indexOf(), lastIndexOf(), and slice():
 */

print([1, 2, 3, 2, 1].indexOf(2)); // → 1
print([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3

print([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
print([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]

// use concat() and slice() to remove an element at a certain index:
const remove = (array, index) => {
    /**
     * takes an array and an index, 
     * and it returns a new array that is a copy of the 
     * original array with the element at the given 
     * index removed.
     */
    return array.slice(0, index).concat(array.slice(index + 1));
};

print(remove(["a", "b", "c", "d", "e"], 2)); // -> remove at index 2

