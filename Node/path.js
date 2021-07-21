const path = require('path');
// console.log(path);

// Extension name
let ext = path.extname(path.join(__dirname, 'abc.js'));
console.log(ext);

// base file and directory
let basename = path.basename(__dirname);
console.log(basename);
basename = path.basename(path.join(__dirname, 'abc.js'));
console.log(basename);


let absolutePath = path.resolve('abc.txt') 
console.log(absolutePath); // D:\TatvaSoft\Nodejs\abc.txt
absolutePath = path.resolve('/Nodejs', 'abc.txt')
console.log(absolutePath); // D:\Nodejs\abc.txt