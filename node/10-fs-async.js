//now the async approach

const { readFile, writeFile } = require("fs");

//in case of async we need to provide a callback function

console.log('start')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `here is the first: ${first} and the second: ${second}`
      ,(err,result)=>{

        if(err){
            console.log(err)
            return
        }
        console.log('done writing.')
        console.log(result)

      }
    );
  });
});

console.log('end');
