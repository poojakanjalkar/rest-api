const productModel = require("../models/product.model")

const getAllProduct=async()=>{
 let productList=await productModel.find({})
 return productList;
}
//const id="64897fe18610053db7fe40b8";
const getProductById=async(id)=>{
  let productId=await productModel.findById(id)
  return productId;
}



const addProduct=async(data)=>{
  console.log(data);
  let product=new productModel({
    name:data.name ,
    price: data.price,
    description: data.description,
    expiryDate: data.expiryDate,
    manufacturingDate:data.manufacturingDate,
    category: data.category,
    url: data.url,
  })
 await productModel.create(product);

}
module.exports={getAllProduct,addProduct,getProductById}