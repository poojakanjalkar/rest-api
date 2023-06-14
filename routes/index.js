const express=require("express");
const productRoute=require("../routes/product.route")
const router=express.Router()
const defaultRoutes=[
  {
    path:"/products",
    route:productRoute
  }
]
defaultRoutes.forEach(elm=>{
  router.use(elm.path,elm.route)
})
module.exports=router