const prompt = require('prompt-sync')();

let stepPattern = function() {
  let steps = " "
let numberOfSteps = prompt('Enter the number of steps: ')

// For each iteration, the value of steps defined above is updated
for(rows = 0; rows < numberOfSteps; rows++){
  steps += "* ";
  console.log(steps);
}
}