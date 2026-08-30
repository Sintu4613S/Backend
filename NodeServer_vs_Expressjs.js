/*
import express from 'express';

const server = express();

server.get('/about',(req,res)=>{
  res.send("About page")
}
server.get('/',(req,res)=>{
 res.send([
   {
     name:'Sintu Kumar',
     age:21
   },
    {
     name:'Rakesh Kumar',
     age:19
   },
    {
     name:'Mohit Kumar',
     age:20
   }
 ])
})

server.listen(8000,()=>{
 console.log("Express js running on http://localhost:8000");
})
*/

//Create a server using Node.js
/*
import http from 'http';

const app = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello from the node server");
  }
  else if (req.url === '/about' && req.method === '/GET') {
    req.writeHead(200, { 'Content-Type': 'text/plain' });
    req.end("This a about Page");
  }

  else {
    req.writeHead(404, { 'Content-Type': 'text/plain' });
    req.end("Page not found")

  }
})

app.listen(3000, () => {
  console.log("Node js server running on http://localhost:3000");
});
*/