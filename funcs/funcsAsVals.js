const print = (X) => {
    console.log(X);
}

// this is a function that takes another function as an input
// and calls that function on the data being passed (as another parameter)
const functionToDo = (anotherFunction, data) => {
    return anotherFunction(data);
}

const displayDataWithTwoPointers = (data) => {
    let left = 0;
    let right = data.length - 1;

    if (data.length % 2 == 1) {
        while (left < right) {
            print(`${data[left]} and ${data[right]}`);
            left++;
            right--;
        }
        print(`lastly: ${data[left]}`);
    }
    else {
        while (left < right) {
            print(`${data[left]} and ${data[right]}`);
            left++;
            right--;
        }
    }
}

const generateTable = (num, limit, count, table) => {
    if (count === limit + 1) {
        return table;
    }
    else {
        table.push(num * count);        
        return generateTable(num, limit, count + 1, table);
    }
}

var table = [];
table = generateTable(10, 15, 1, table);
print(table);

functionToDo(displayDataWithTwoPointers, table);