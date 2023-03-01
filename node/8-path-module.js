const path = require('path')


console.log(path.sep)


const filepath = path.join('/content','subfolder','test.txt');


console.log(filepath);


//to get the last portion of the file

const base = path.basename(filepath);

console.log(base);

//path.resolve returns the absolute path
//path.resolve accepts a sequence of paths or path segments
//and resolves them into an absolute path

// __dirname will return where app.js is located

const absolute = path.resolve(__dirname,"content","subfolder",'test.txt');

console.log(absolute);