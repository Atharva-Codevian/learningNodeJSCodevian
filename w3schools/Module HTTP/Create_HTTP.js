var http = require ('http');

//create server object
http.createServer(function(req,res){

    res.write('Hello World ! ! ! ');                //write a response to the client
    res.end();



}).listen(8080);