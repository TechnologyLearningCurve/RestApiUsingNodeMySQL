var db = require("../core/db");

exports.getList = function(req, res){
  db.executeSql("SELECT * FROM CUSTOMER",function(err,rows){

        if(err){
        console.log("there is an error occured in query");
     res.writeHead(500,"Internal server occured",{"content-type":"text/plain"});
      res.write("<html><head><title>500</title></head><body>Internal server occured</body></html>");
  }else{
    console.log("Enterd into success response");
      res.writeHead(200,"Success",{"content-type":"application/json"});
      res.write(JSON.stringify(rows));
    }
    res.end();
  });
};

exports.get = function(req, res,customerid){

};

exports.add = function(req, res,reqBody){

};

exports.update = function(req, res,reqBody){

};

exports.delete = function(req, res,reqBody){

};
