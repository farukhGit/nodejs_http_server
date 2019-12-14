//basicHttpServer -> index.js

const http = require('http');
const port = 8000;

//defining the handler function
//req is request from client, as an object (http.IncomingMessage Object)
function requestHandler(req, res){
    // console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'})   //specify the type of content
    res.write(req.url + ' says -> Hello World');    //res.write writes to
    res.end('<h1>Also, this can write into page</h1>');
}   

//creates an instance of a server on user device: important to require 'http' before using method
const server = http.createServer(requestHandler); //returns HTTP Server Object

server.listen(port, (err) =>{ 
    if(err){                      
        console.log('Error!')
        return;
    }
    console.log('No error!');
    return;
});


/*
    can use this too;

    const http = require('http');
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Hello World!);
        res.end();
    }).listen(port, (err)=>{
        if(err){
            console.log('Error connecting to the server.');
            return;
        }
        console.log('Connected to the server @ ', port);
    });

 */