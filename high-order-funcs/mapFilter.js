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