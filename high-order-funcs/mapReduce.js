const { print, printArray } = require("../utils/printUtils");
const SCRIPTS = require("../datasets/scripts");

//print(SCRIPTS);

const filter = (data, test) => {
    let passed = [];

    for (let entry of data) {
        if (test(entry)) {
            passed.push(entry);
        }
    }

    return passed;
};

const map = (data, transform) => {
    let mapped = [];

    for (let entry of data) {
        mapped.push(transform(entry));
    }

    return mapped;
};

// scripts with living = true
let livingScripts = filter(SCRIPTS, script => {
    if (script.living !== false) {
        return script;
    }
});

//printArray(livingScripts);

// scripts that read from 'top to bottom' ("ttb"):
let ttbScripts = filter(SCRIPTS, script => {
    if (script.direction === "ttb") {
        return script;
    }
});

//printArray(ttbScripts);

// now we use the internal filter() function:
//printArray(SCRIPTS.filter(s => s.direction === "ttb"));

let rtlScripts = filter(SCRIPTS, script => {
    if (script.direction === "rtl") {
        return script;
    }
});

print(map(rtlScripts, s => s.name));
print(map(ttbScripts, s => s.name));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0); // 0 is the start value over here for our sum!
}

/**
 * This is SCRIPTS[0]:
 * {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },

  //? AND AS WE CAN SEE, THE RANGES HAVE BEEN COUNTED AS:
  //? (125259 - 125184) + (125274 - 125264) + (125280 - 125278) = 87
 */
print(characterCount(SCRIPTS[0]));

print(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

