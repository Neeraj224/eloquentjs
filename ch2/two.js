// a fragment of code that produces a value is called an expression
function print(stuff){
    console.log(stuff);
}

// to catch and hold a value, almos t every programming language provides
// a thing called variable (or a binding):
let caught = 5 * 5;
var not_caught = 25 * 25;

print(caught);
print(not_caught);

print(typeof(caught));
print(typeof(not_caught));

print((caught * caught) === not_caught ? 1 : 0); // -> 1

let mood = "light";
print(mood);

if(mood !== "LIGHT"){
    mood = "dark";
}

print(mood);

function calculateDebtLikeAShark(remainingDebt, amountPaid, interestRate){
    const ORIGINAL_DEBT = remainingDebt;
    const MONTHLY_FACT = 12;
    const CENT = 100;

    if(amountPaid == remainingDebt){
        return 0;
    }

    let interestCalculated = (remainingDebt - amountPaid) * (interestRate / (CENT * MONTHLY_FACT));
    remainingDebt = (remainingDebt - amountPaid) + interestCalculated;

    if(remainingDebt > 0){
        return remainingDebt;
    }
    else{
        print("Went under");
        return ORIGINAL_DEBT;
    }
    
}

let luigisDebt = 635;
print(calculateDebtLikeAShark(luigisDebt, 30, 12));

let mariosDebt = 1255;

for(let i = 10; ; i = i + 55){
    if(calculateDebtLikeAShark(mariosDebt, i, 20) == mariosDebt){
        break;
    }

    print(calculateDebtLikeAShark(mariosDebt, i, 20));
}

let x = () => {
    return 42;
}

print(x);

print(Math.max(4, 2));


