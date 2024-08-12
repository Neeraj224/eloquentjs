const remove = (array, index) => {
    /**
     * takes an array and an index, 
     * and it returns a new array that is a copy of the 
     * original array with the element at the given 
     * index removed.
     */
    return array.slice(0, index).concat(array.slice(index + 1));
};

module.exports = {
    remove,
};