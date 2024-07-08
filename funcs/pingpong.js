const print = x => console.log(x);

const ping = (x) => {
    if (x === 0) {
        print("Player I wins!");
        return;
    }
    else {
        print("ping!");
        return pong(x - 1);
    }
};

const pong = (x) => {
    if (x === 0) {
        print("Player II wins!");
        return;
    }
    else {
        print("pong!");
        return ping(x - 1);
    }
};

ping(10);
pong(12);

