function print(anything){
    console.log(anything);
}

function generateChessBoard(dimension){
    let WHITE = " ";
    let BLACK = "#";
    let board = [];
    let startsWith = WHITE;

    for (let i = 1; i < dimension + 1; i++){
        if(i % 2 === 1){
            startsWith = WHITE;
        }
        else {
            startsWith = BLACK;
        }

        let currentRow = "";

        for (let j = 0; j < dimension; j++){     
            if(startsWith === WHITE){
                if(j % 2 === 0){
                    currentRow = currentRow + WHITE;
                }
                else {
                    currentRow = currentRow + BLACK;
                }
            }
            else if (startsWith === BLACK){
                if(j % 2 === 0){
                    currentRow = currentRow + BLACK;
                }
                else {
                    currentRow = currentRow + WHITE;
                }
            }
        }

        board.push(currentRow);
    }

    return board;
}

function drawBoard(board){
    for (let i = 0; i < board.length; i++){
        print(board[i]);
    }
}

var boardToDraw = generateChessBoard(8);
drawBoard(boardToDraw);
