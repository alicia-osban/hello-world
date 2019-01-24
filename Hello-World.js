const http = require("http");
const pkg = require("./package.json");
const app = require("express")(); 
const { join } = require("path"); 

app.get("/", function(req, res){
  console.log("incoming request", req.url);
  const path = join(__dirname, "dist", "index.html");
  console.log("index.html path", path);
  res.sendFile(path);
});

http.createServer(app).listen(3000);