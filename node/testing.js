function hello (a){

    console.log(`this is ${a}`)

}


function g (a){
    console.log("first");
    console.log("fst");
    console.log("fit");

    a(3)

     //hello(a);

}

g((a)=>{console.log('hello'+a)});



////////////////////////////////////////////////

function hello (a){

    console.log(`this is ${a}`)

}


function g (a){
    console.log("first");
    console.log("fst");
    console.log("fit");

    a('mario')

     //hello(a);

}

g(hello);