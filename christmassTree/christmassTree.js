// christMassTree
const prompt = require('prompt-sync')();

let input = prompt('Enter tree size: ')
let row, col, ans = ' '

for(row = 0; row < input; row++){

  for(col = row; col < input; col++){
    ans += ' '
  }
  for(col = 1; col <= (2 *row-1); col++){
    ans += '*'
  }
  ans += '\n'
}
console.log(ans);

