function print(whatever){
    console.log(whatever);
}

function getSquare(number){
    if (typeof(number) === "number"){
        print("Your number is the square root of " + number * number);
    }
    else{
        print(`
            Hey, why dont you give me a number? 
            Henry, is this you? 
            Dammit Henry, I told you I did not eat your bananas!
            Mom, can you please tell Henry not to mess with my tutorials!?!
            `);
    }
}

getSquare(18);
getSquare("parrot");

// the following also works:
if (1 + 1 === 2) { print("i mean it IS true"); }
 
function getRange(number){
    if(number <= 10){
        return range = "0...10";
    }
    else if(number > 10 && number <= 100){
        return range = "10...100";
    }
    else{
        return "Oh my god, you have such a huge number!";
    }
}

print(getRange(101));


