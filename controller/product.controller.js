const { query } = require("express");
const { getAllProduct, addProduct,getProductById, updateProduct, deleteProduct, getByName } = require("../service/product.service");

const getProducts=async(req,res)=>{
  //let data=req.body;
  let name=req.query.name; 
  let limit=req.query.limit;
  let page=req.query.page
  let result
  if(name){
    result=await getByName(name)
  }else{
    result=await getAllProduct(limit,page)
  }
  
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

const updateById=async(req,res)=>{
  let i=req.body.id;
  let price=req.body.price;
  let f=await updateProduct(i,price)
  res.status(200).json({message:"product list updated successfully",payload:f})
}

const deleteById=async(req,res)=>{
  let d=req.params.id;
  await deleteProduct(d);
  res.status(200).json({message:"product deleted successfully"})
}



module.exports={
  getProducts,
  createProduct,
  getById,
  updateById,
  deleteById,
  
}

