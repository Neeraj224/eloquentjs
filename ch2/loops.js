function print(whatever){
    /*
        our staple function for wrapping console.log()
        because its too much to type every time
        and also i come from the comfortable vastlands
        of Planet Python!
    */
    console.log(whatever);
}

function getListTillLimit(iterationLimit){
    // just generate a list of numbers till a certain limit
    let idx = 0;
    let iterations = [];

    while(idx <= iterationLimit){
        // a push() method adds new elements to an array
        iterations.push(idx);
        idx++;
    }

    return iterations;
}

function getSquare(number){
    // get a friggin square of a number
    return (number * number);
}

function getSquaresList(list){
    /*
        take in a list/array and return another list
        of its squares
    */
    let limit = list.length;
    let idx = 0;
    let squares = [];

    while(idx < limit){
        squares.push(getSquare(list[idx]));
        idx++;
    }

    return squares;
}

print(getListTillLimit(10));
print(getSquaresList(getListTillLimit(10)));

function recursiveGenerateList(limit, list, idx){
    /*
        just a simple recursive function to generate
        a list of numbers up to the limit.
    */
    if(idx == limit){
        // after reaching the limit we still
        // need to add the number to the list
        list.push(idx);
        
        return list;
    }
    else{
        // else just push whatever number we have at the index
        // right now, and...
        list.push(idx);
        // ...and well recursively call the same function
        // again by increasing the index
        return recursiveGenerateList(limit, list, idx + 1);
    }

}

let list = [];
list = recursiveGenerateList(10, list, 0);
print(list);

function recursiveGetPowersOfTwo(powerLimit, list, current, idx){
    if(idx == powerLimit){
        list.push(current);

        return list;
    }
    else{
        list.push(current);

        return recursiveGetPowersOfTwo(powerLimit, list, current * 2, idx + 1);
    }
}

let powersOfTwo = [];
powersOfTwo = recursiveGetPowersOfTwo(10, powersOfTwo, 1, 0);
print(powersOfTwo);

function doLoopExample(num){
    do{
        print("while we are inside the loop, the num is: [" + num + "]");
        num = num * 2;
    } while(num < 100);

    print("now outside of the loop because num went more than 100: [" + num + "]");
}

doLoopExample(2);

function forLoopExample(num){
    for(let current = 0; current <= num; current++){
        print(current);
    }
}

forLoopExample(5);

function forLoopExampleWithList(limit){
    let list = [1];
    let previous = list[0];

    for(let i = 0; i < limit; i++){
        previous = previous * 2;
        list.push(previous);
    }

    return list;
}

print(forLoopExampleWithList(10));

function forLoopExampleWithBreak(initial, limit){
    if(initial >= limit){
        print("wrong initial and the limit. please enter again.");
        return;
    }

    let factors = [];
    
    for(let i = initial; i < limit; i++){
        
        if((i % 21) === 0){
            factors.push(i);
            continue;
        }
    }

    return factors;
}

print(forLoopExampleWithBreak(106, 190));

function getTable(number, productLimit){
    let table = [];

    for(let i = 1; i <= productLimit; i++){
        table.push(number * i);
    }

    return table;
}

print(getTable(10, 20));


