const print = (anything) => {
    console.log(anything);
}

const flattenArray = (array) => {
    var arrayLength = array.length;
    var flattenedArray = [];

    for (let i = 0; i < arrayLength; i++) {
        if (array[i].length >= 1){
            for (let j = 0; j < array[i].length; j++) {
                flattenedArray.push(array[i][j]);
            }
        }
        else {
            flattenedArray.push(array[i]);
        }
    }

    return flattenedArray;
}

const easyFlatten = (array) => {
    return JSON.parse('[' + array.toString() + ']');
}

var dummyArray = [1, [2, 3], [4, 5, [57, 88, [9, 10]]], [6, 7, 8]];
// print(flattenArray(dummyArray));
// print(easyFlatten(dummyArray));

var result = []

const recFlattenArray = (array, result) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 1) {
            recFlattenArray(array[i], result);
        }
        else {
            result.push(array[i]);
        }
    }
}

recFlattenArray(dummyArray, result);
print(result);