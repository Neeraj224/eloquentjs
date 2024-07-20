const { print, printMatrix } = require("../utils/printUtils");
const JOURNAL = require("./journal");

let journal = [];

const addEntry = (events, squirrel) => {
    // also note that instead of writing
    // events: events, we use a shorthand that just
    // mentions the name of the property
    // if a property name in brace notation isn’t followed by a value, 
    // its value is taken from the binding with the same name.
    journal.push({events, squirrel});
};

// first dummy data to try on:
/* 
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false); 
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
*/ 

const transformData = (data) => {
    let flatData = [];
    let inString;

    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
            inString = i.toString() + j.toString();
            flatData.push(data[inString]);
        }
    }

    return flatData;
};


/**
 * All the necessary functions for the Lycan Logs file are included here
 * anything above this block of code should be ignored - all of that is
 * just sandbox code.
 */

const phi = (table) => {
    /*
        table[0] - 00
        table[1] - 01
        table[2] - 10
        table[3] - 11
    */
    return  ((table[3] * table[0]) - (table[2] * table[1])) / 
            Math.sqrt(  ( table[2] + table[3] ) * 
                        ( table[0] + table[1] ) *
                        ( table[1] + table[3] ) *
                        ( table[0] + table[2] ));
};

const buildTable = (event, journal) => {
    // bitmaps: 00, 01, 10, 11
    //          0...1...2...3
    // MSB: squirrel, LSB: event
    let table = [0, 0, 0, 0];

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        // arrays have an includes method that checks
        // whether a given value is in the array or not
        if (entry.events.includes(event)) {
            // if event is there, we will push it to
            // at lease the first index
            index += 1;
        }
        
        if (entry.squirrel) {
            // if turned into a squirrel,
            // we need to push it to at least
            // the second index
            index += 2;
        }

        // if both of them were true, i.e.,
        // event exists and turned into squirrel as well,
        // then the index will be 1 + 2 = 3
        // since both are set: so 11 -> binary(3)

        // then just increment the count of the entry
        // type:
        // whether both or set or either one, or none:
        table[index] += 1;
    }

    return table;
};

// print(buildTable("pizza", JOURNAL));
/*
for (let entry of JOURNAL) {
    print(`${entry.events.length} events`);
}
*/

// get all the events:
const buildEvents = (journal) => {
    let events = [];
    
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }

    return events;
};

let EVENTS = buildEvents(JOURNAL);
//print(EVENTS);
let CORRELATIONS = [];

// get correlations for all the events:
for (let event of EVENTS) {
    CORRELATIONS.push([event, phi(buildTable(event, JOURNAL))]);
}

printMatrix(CORRELATIONS);

// filter correlations greater than 0.1 or less than 0.1
for (let j = 0; j < CORRELATIONS.length; j++) {
    if (CORRELATIONS[j][1] > 0.1 || CORRELATIONS[j][1] < -0.1) {
        print(`${CORRELATIONS[j][0]}: ${CORRELATIONS[j][1]}`);
    }
}

// cross correlation:
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");     
    }
}

print(phi(buildTable("peanut teeth", JOURNAL)));
