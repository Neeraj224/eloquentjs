function print(anything){
    console.log(anything);
}

let HASH_SYMBOL = "#";

function drawPyramid(pyramidHeight){
    for(let i = 1; i < pyramidHeight + 1; i++){
        let currentHashString = "";

        for(let j = 0; j < i; j++){
            currentHashString += HASH_SYMBOL;
        }
        
        print(currentHashString);
    }
}

drawPyramid(7);

function simpleHashTriangle(pyramidHeight){
    for(let floor = "#"; floor.length <= pyramidHeight; floor += "#"){
        print(floor);
    }
}

simpleHashTriangle(7);
