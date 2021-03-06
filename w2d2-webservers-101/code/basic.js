let http = require('http');
const PORT = 3000;

var resources = {
  '/family': "<html><body><h2>We are thankful</h2><p>...for all our loved ones</p></body></html>",
  '/pumpkin': "We are thankful for our big belly",
  '/turkey': "We are thankful for our food",
  '/': "Be Thankful you arrived",
  '/about': require('./about')
  // '/article/1': ,
  // '/article/2':
}

// create a server with a responder function
function handleNewRequest(request, response){
    // respond to all requests in this function
    console.log("Got request: ", request.method, request.url)

    if (resources[request.url]) {
      response.end(resources[request.url])
    } else {
        response.statusCode = 404;
        response.statusMessage = 'Not found here';        
        response.end("We are just thankful for all things we don't have yet")     
    }
}

let server = http.createServer(handleNewRequest)

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
