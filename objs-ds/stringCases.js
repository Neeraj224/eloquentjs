const { print, printArray, printMatrix } = require("../utils/printUtils");
const { remove } = require("../utils/arrayUtils");

const extractWords = (text) => {
  return text.split(" ");  
};

const buildText = (words) => {
    return words.join(". ");
};

const echoWord = (word, times) => {
    word += " ";
    return word.repeat(times) + "!!!";
};

let sentence = "Bojack was robbed of all the awards in the world! We all should just accept it and give it the ultimate-supreme-best-story-written-ever award.";

print(extractWords(sentence));
print(buildText(extractWords(sentence)));

print(echoWord("Bojack", 3));

/**
 * Rest parameters: 
 * To use all the parameters/arguments being sent, we need to put
 * three dots before the function's last parameter.
 */

const max = (...numbers) => {
    let maximum = -Infinity;

    for (let number of numbers) {
        if (number > maximum) {
            maximum = number;
        }
    }

    return maximum;
};

print(max(47, -9, 0, 1999));

// rest param is a cool feature!
const addToDict = (dictionary, ...words) => {
    for (let word of words) {
        dictionary.push(word);
    }

    return dictionary;
};

print(buildText(addToDict([], "hello", "hi", "what", "is", "happening")));

// we can also use it this way:
let extras = ["long", "and", "thanks"];
print(["so", ...extras, "for all the fish"]);

function getPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;

    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

print(getPointOnCircle(2));

// rewriting phi()'s olde definition:
/**
 * instead of using the array names like that, which is very
 * difficult to understand and read, we will write it in a more
 * succinct way:
 * by renaming array elements as below:
 */
const phi = ([n00, n01, n10, n11]) => {
    return  (n11 * n00 - n10 * n01) / 
            Math.sqrt(  (n10 + n11) * (n00 + n01) ) *
                     (  (n01 + n11) * (n00 + n10) );
};

let {name} = {name: "Bojack", age: 27};

print(name);

/**
 * JSON.stringify() and JSON.parse():
 */
function stringify(object) {
    return JSON.stringify(object);
}

function parseString(string, prop) {
    return JSON.parse(string)[prop];
}

let object1 = {
    squirrel: false,
    events: ["weekend", "sleep"],
};

print(stringify(object1));
print(parseString(stringify(object1), "events"));
//let str = stringify(object1);
//print(JSON.parse(str).events);


