const http = require('http')


//http.createServer takes a callback function that takes
//two parameters the first is /* req and second is res */
//the first parameter represents the incoming request
//like ex a client is requesting something
//so you'll have information about the method and all kinds
//of useful stuff in the req object
//and the response (res) is what we are sending back 

const server = http.createServer((req,res)=>{
   
    if(req.url === '/'){
        res.end('welcome man')
        return
    }
    if(req.url === '/about'){
        res.end('this is about')
        return
    }

    res.end(`
     <h1>can't seem to find</h1>
     <a href="/">home</a>`);
   
   
   
})

//we are specifying what port our server is going to listen to

server.listen(5000)