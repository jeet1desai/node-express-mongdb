let cp = require('child_process');
console.log(cp);

// open Calculator
cp.execSync('calc');

// open VS code
cp.execSync('code');


// open site in chrome
cp.execSync('start chrome https://reactjs.org/');

// open file
let res = cp.execSync('node abc.js');
console.log(res.toString());