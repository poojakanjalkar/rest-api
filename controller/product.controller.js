const { query } = require("express");
const { getAllProduct, addProduct,getProductById } = require("../service/product.service");

const getProducts=async(req,res)=>{
  //let data=req.body;
  let result=await getAllProduct()
  res.status(200).json({message:"product list fetched successfully",payload:result})
}
const createProduct=async(req,res)=>{
  console.log(req);
  let data=req.body;
  //console.log(data);
  await addProduct(data)
  res.status(200).json({message:"product list fetched successfully"})
}
const getById=async(req,res)=>{
  let id=req.params.id;
  let result=await getProductById(id)
  res.status(200).json({message:"product list fetched successfully",payload:result})
}

module.exports={
  getProducts,
  createProduct,
  getById
}

