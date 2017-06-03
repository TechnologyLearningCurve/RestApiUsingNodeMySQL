var http = require("http");
var customer = require("../controllers/customer");
var setttings = require("../settings");

http.createServer(function(req,res){
switch(req.method){
case "GET":
if(req.url==="/"){

}else if(req.url==="/customers"){
  customer.getList(req,res);
}
break;
case "POST":
break;
case "PUT":
break;
case "DELETE":
break;
default:
break;
}

//  res.writeHead(200,{"content-type":"text/plain"});
//  res.end("Welcome to my first node.js server");
}).listen(setttings.webport,function(){
  console.log("Server started...");
    console.log("Started listening at "+ setttings.webport);
});
