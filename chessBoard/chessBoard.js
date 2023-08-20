//chessBoard
let chessBoard = function () {
  let boardSize = 8;

for(let row = 1; row <= boardSize; row++){
  let board = ''
  for(let col = 1; col <= boardSize; col++){
    if ((row + col) % 2 === 0) {
      board += '#' + '  '
    }
    else {
      board += '  ' + ' '
    }
  }
  console.log(board);
}
}

chessBoard()