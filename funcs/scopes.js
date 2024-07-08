const print = (anything) => {
    console.log(anything)
}

const someRandomFunc = (x) => {
    print(x);

    if(true){
        let y = x + 10;
        var z = x + 20;

        print(x + y + z);
    }
    // outside of the if block, y will not be visible.
    // becasue let and const have scopes local  to only the respective
    // blocks
    // print(y); // -> this wont work
    print(x + z);
}

someRandomFunc(10);

var recipe = [
    [1, "can", "chickpeas"],
    [0.25, "cup", "tahini"],
    [0.25, "cup", "lemon juice"],
    [1, "clove", "garlic"],
    [2, "tablespoon", "olive oil"],
    [0.5, "tablespoon", "cumin"]
];

const hummus = (factor) => {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;

        if(ingredientAmount > 1){
            unit += "s";
        }
        print(`${ingredientAmount} ${unit} ${name}`);
    }

    for(let i = 0; i < recipe.length; i++){
        let bowl = [];
        for(let j = 0; j < recipe[i].length; j++){
            bowl.push(recipe[i][j]);
        }
        ingredient(bowl[0], bowl[1], bowl[2]);
    }
}

hummus(2);
