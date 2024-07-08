const print = (anything) => {
    console.log(anything);
}

const iterativeLinearSearch = (target, array) => {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }

    return -1;
}

const recursiveLinearSearch = (target, array, index) => {
    if (target === array[index]) {
        return index;
    }
    else if (index === array.length) {
        return -1;
    }
    else {
        return recursiveLinearSearch(target, array, index + 1);
    }
}

const iterativeBinarySearch = (target, array) => {
    let low = 0;
    let high = array.length - 1;
    var mid = 0;

    while(low <= high){
        mid = Math.floor((low + high) / 2);

        if (target < array[mid]) {
            high = mid - 1;
        }
        else if (target > array[mid]) {
            low = mid + 1;
        }
        else if (target === array[mid]) {
            return mid;
        }
    }
    // instead of writing an else inside the while block,
    // just return a -1 over here.
    return -1;
}

const recursiveBinarySearch = (target, array, low, high) => {
    let mid = Math.floor((low + high) / 2);

    if (target === array[mid]) {
        return mid;
    }
    else if (low > high) {
        return -1;
    }
    else if (target < array[mid]) {
        return recursiveBinarySearch(target, array, low, mid - 1);
    }
    else if (target > array[mid]) {
        return recursiveBinarySearch(target, array, mid + 1, high);
    }
}

const fillArray = (limit, array, index) => {
    if (index === limit) {
        return array;
    }
    else {
        array.push(index);

        return fillArray(limit, array, index + 1);
    }
}

var dummyArray = [];
dummyArray = fillArray(25, dummyArray, 0);
print(dummyArray)

print(iterativeLinearSearch(23, dummyArray));
print(recursiveLinearSearch(22, dummyArray, 0))
print(iterativeBinarySearch(21, dummyArray));
print(recursiveBinarySearch(4, dummyArray, 0, dummyArray.length - 1))

print(iterativeLinearSearch(29, dummyArray));
print(recursiveLinearSearch(81, dummyArray, 0))
print(iterativeBinarySearch(200, dummyArray));
print(recursiveBinarySearch(47, dummyArray, 0, dummyArray.length - 1))
