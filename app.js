const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const { connectMongoDB } = require("./utils/dbUtil");
const routes=require("./routes")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/",routes)


app.listen(3000,function(){
  console.log("server started on 3000");
  connectMongoDB()
})