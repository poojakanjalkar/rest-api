const { getAllUser, addUser,getByUserName } = require("../service/user.service")


const createUser=async(req,res)=>{
  console.log(req);
  let data=req.body;
  await addUser(data);
  res.status(200).json({message:"user created successfully"})
}
const getUser=async(req,res)=>{
  let name=req.query.name;
  let limit=req.query.limit;
  let page=req.query.page
let all
  if(name){
     all=await getByUserName(name)
  }else{
    all=await getAllUser(limit,page)
  }
  
  res.status(200).json({message:"user lidt fetched successfully",payload:all}) 
}

/*const updateUserById=async(req,res)=>{
let 
}*/


module.exports={
  createUser,
  getUser
}