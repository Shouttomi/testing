const { readFileSync, writeFileSync } = require("fs");

//in readFileSync we need to provide two parameters
//the path to that specific file as well as the encoding

//as far as the encoding the default one will be utf8

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// in writeFileSync takes two arguments one is the filename
//if the file is not there node will create that file
//second is the value we want to pass

//console.log(first);

/* writeFileSync(
  "./content/result-sync.txt",
  `this is first: ${first}, this is second: ${second}`
); */


//if the file is already there node by default
// will override all the values.

//now if we need to append to the file we need to pass in one more
//argument which is an object {flag: 'a'}

writeFileSync(
    "./content/result-sync.txt",
    `this is first: ${first}, this is second: ${second}`
  ,{flag: 'a'});




