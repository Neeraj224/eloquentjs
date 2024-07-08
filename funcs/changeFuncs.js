const print = (X) => {
    console.log(X);
};

let launchMissiles = () => {
    print("Launching Missiles!");
};

/*
const someFunc = (funcOne, flag) => {
    if (flag === true) {
        funcOne = () => { 
            print("Not launching missiles!");
        };
    } 
    else {
        funcOne();
    }
};

someFunc(launchMissiles, false);
someFunc(launchMissiles, true);
someFunc(launchMissiles, false);
*/

const future = (message) => {
    if (typeof message === "string") {
        print(message);
    }
    else {
        print("What you sent was not a string.\nPlease try again.");
    }
};

function eightBall(funcX, message){
    funcX(message);
}

eightBall(future, "hi from the future");
eightBall(future, 89);