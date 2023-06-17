const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../models/user.model");

async function register(username,password){
  const existingUser=await User.findOne({username});
  if(existingUser){
    throw new Error("Username already taken");
  }
    // hash password
    const hashedPassword=await bcrypt.hash(password,10);

    const user=new User({
      username,
      password:hashedPassword,
    })

    await user.save();
    return user;
  }
  async function login(username,password){
    const user=await User.findOne({email:username});
    if(!user){
      throw new Error("invalid credentials");
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
      throw new Error("invalid credentials");
    }

    const token=jwt.sign({userId:user.id},'secret-key',{
      expiresIn:'1h',
    });

    return token;
  }
  module.exports={
    register,
    login
  }
