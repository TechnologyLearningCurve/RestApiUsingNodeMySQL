var mysql = require('mysql');
var express    = require("express");
var settings = require("../settings");
var app = express();

var conn = mysql.createConnection(settings.dbconfig);
conn.connect(function(err){
  if(err){
     console.log("Error occured");
  }else{
     console.log("Database connected");
  }
});

exports.executeSql = function(sql,callback){
  conn.query(sql,function (err,rows,fields) {
if (err) {
   console.log("Error occured");
}else{
  console.log("callback results..");
  callback(null,rows);
  console.log(rows);
}

  });
};
