function print(anything){
    console.log(anything);
}

function recursiveFizzBuzz(list, limit, number){
    if(number === limit + 1){
        return list;
    }
    else{
        if((number % 3) === 0 && (number % 5) === 0){
            list.push("FizzBuzz");
        }
        else if((number % 3) === 0){
            list.push("Fizz");
        }
        else if((number % 5) === 0){
            list.push("Buzz");
        } 
        else{
            list.push(number);
        }

        return recursiveFizzBuzz(list, limit, number + 1);
    }
}

let fizzBuzzList = [];
recursiveFizzBuzz(fizzBuzzList, 100, 0);
print(fizzBuzzList);

for(let i = 0; i < fizzBuzzList.length; i++){
    print(fizzBuzzList[i]);
}