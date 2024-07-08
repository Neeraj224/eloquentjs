const { print, printMatrix } = require("../utils/printUtils");

const printFarmInventory = (cows, chicken) => {
    let inventoryString = "";

    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }

    inventoryString += cowString + " Cows, ";

    let chickenString = String(chicken);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }

    inventoryString += chickenString + " Chicken.";
    
    return inventoryString;
};

print(printFarmInventory(897, 11));

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// a better modularized way:

var GLOBAL_INVENTORY = [];
const PAD_WIDTH = 3;

// generic padding function
const zeroPad = (num, width) => {
    let numString = String(num);

    while (numString.length < width) {
        numString = "0" + numString;
    }

    return numString;
};

// add to inventory
const addToInventory = (num, animal) => {
    GLOBAL_INVENTORY.push([zeroPad(num, PAD_WIDTH), animal]);
}

const getCount = (animal) => {
    let count = -1;

    for (let entry of GLOBAL_INVENTORY) {
        if (entry[1] === animal) {
            count = entry[0];
            break;
        }
    }

    if (count >= 0) {
        print(`You have ${count} ${animal}.`);
        return;
    }
    else {
        print("This animal is not in your inventory.");
        return;
    }
};

const updateCount = (num, animal) => {
    for (let elem of GLOBAL_INVENTORY) {
        if (elem[1] === animal) {
            elem[0] = zeroPad(num, PAD_WIDTH);
            print("Update Successful.");
            return;
        }
    }

    print("This animal is not in your inventory.");
    return;
};

// display inventory
const getInventory = () => {
    printMatrix(GLOBAL_INVENTORY);
};

const deleteAnimal = (animal) => {
    let NEW_INVENTORY = [];
    let wasPresent = false;

    for (let element of GLOBAL_INVENTORY) {
        if (element[1] != animal) {
            NEW_INVENTORY.push(element);
        }
        else {
            wasPresent = true;
        }
    }
    if (wasPresent) { return NEW_INVENTORY; }
    else { print("This animal is not in your inventory."); return NEW_INVENTORY; }
}

// CREATE
addToInventory(33, "Cows");
addToInventory(84, "Chicken");
addToInventory(24, "Pigs");
addToInventory(2, "Camels");
addToInventory(12, "Goats");
addToInventory(9, "Horses");
addToInventory(4, "Dogs")
addToInventory(6, "Cats")
addToInventory(12, "Sheep")
addToInventory(19, "Ducks")
addToInventory(54, "Rabbits")

// READ
getCount("Camels");
// READ
getInventory();
// UPDATE
updateCount(42, "Cows");
getInventory();

// DELETE
GLOBAL_INVENTORY = deleteAnimal("Migs");
GLOBAL_INVENTORY = deleteAnimal("Chicken");
getInventory();
