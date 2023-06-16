const userModel = require("../models/user.model");
//const productModel=require("../models/user.model");

const addUser=async(data)=>{
  console.log(data);
  let user=new userModel({
    name:data.name, 
    email: data.email,
    password: data.password,
    date: data.date,
    createdAt:data.createdAt,
    updatedAt: data.updatedAt
  });
  await userModel.create(user);
}

const getAllUser=async(limit,page)=>{
  const options={
    page:page,
    limit:limit,
  }
  const userList=await userModel.paginate({},options);
  return userList;
}

const getByUserName=async(name)=>{
  let userName=await userModel.find({name});
  console.log(userName);
  return userName;
}

const updateUser=async(id,email)=>{
  let updated=await userModel.findByIdAndUpdate(id,{$set:{email:email}});
  console.log(updated);
}











module.exports={
  addUser,
  getAllUser,
  getByUserName,updateUser
}