// TODO One way to define functions:
const print = (x) => {
    console.log(x);
}

// * also this way:
const square = function(x){
    return x * x;
}

print(square(12));

// * also this way:
const cube = (x) => {
    return x * x * x;
}

print(cube(cube(2)));

const power = (number, exponent) => {
    var result = 1;
    
    for (let i = 1; i < exponent + 1; i++){
        result = result * number;
    }

    return result;
}

print(power(2, 10));

// ! AND THIS IS HOW RECURSIVE FUNCTIONS WILL WORK IN THIS:
// ? I DONT UNDERSTAND WHY CONST THO?
const something = (x, n) => {
    if(x === n + 1){
        return;
    } else {
        print(x);
        return something(x + 1, n);
    }
}

// something(10, 20);

const fillList = (start, end, list) => {
    // * always the base case
    if(start === end + 1){
        return list;
    } else {
        list.push(start);
        // TODO always the recursive step
        return fillList(start + 1, end, list);
    }
}

var array = [];
fillList(1, 10, array);
print(array);

const helloList = (limit) => {
    var listOfHellos = [];

    for(let i = 0; i < limit + 1; i++){
        listOfHellos.push("Hello");
    }

    return listOfHellos;
}

print(helloList(10));



