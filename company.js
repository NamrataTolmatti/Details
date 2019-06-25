var express = require('express');
var app=express();

var DetailsController=function(req,res){

console.log("details are following");
var details=
[
{companyId:1,Location:"India",product:"material",empcnt:200,custcnt:50000},
{companyId:2,Location:"US",product:"metal",empcnt:100,custcnt:45000},
{companyId:3,Location:"UK",product:"rods",empcnt:400,custcnt:25000},
{companyId:4,Location:"Japan",product:"ringd",empcnt:600,custcnt:35000},
{companyId:5,Location:"South Africa",product:"machine",empcnt:300,custcnt:55000}
];
res.send(details);
};

app.get('/details',DetailsController);

var server=app.listen(8088,function(req,res)
{
	
console.log("details are provided by http://localhost:8088");	
}
)