const { print, printArray } = require("../utils/printUtils");

const regularDict = {
    "a": "A", "b": "B", "c": "C",
    "d": "D", "e": "E", "f": "F",
    "g": "G", "h": "H", "i": "I",
    "j": "J", "k": "K", "l": "L",
    "m": "M", "n": "N", "o": "O",
    "p": "P", "q": "Q", "r": "R",
    "s": "S", "t": "T", "u": "U",
    "v": "V", "w": "W", "x": "X",
    "y": "Y", "z": "Z",
};

const reverseDict = {
    "A": "a", "B": "b", "C": "c",
    "D": "d", "E": "e", "F": "f",
    "G": "g", "H": "h", "I": "i",
    "J": "j", "K": "k", "L": "l",
    "M": "m", "N": "n", "O": "o",
    "P": "p", "Q": "q", "R": "r",
    "S": "s", "T": "t", "U": "u",
    "V": "v", "W": "w", "X": "x",
    "Y": "y", "Z": "z",
};

const lowerToUpper = (text) => {
    var convertedText = "";

    for (let i = 0; i < text.length; i++) {
        if(regularDict[text[i]]) {
            convertedText += regularDict[text[i]];
        }
        else {
            convertedText += text[i];
        }
    }

    return convertedText;
};

const upperToLower = (text) => {
    var convertedText = "";

    for (let i = 0; i < text.length; i++) {
        if (reverseDict[text[i]]) {
            convertedText += reverseDict[text[i]];
        }
        else {
            convertedText += text[i];
        }
    }

    return convertedText;
};

print(lowerToUpper("hello, Hi!"));
print(upperToLower("Hello, HI!"));
print(lowerToUpper("hello, this, is some random text to Test On."));
print(upperToLower("Hello, thiS iS anOtheR RanDoM TeXt to TeST On."));
