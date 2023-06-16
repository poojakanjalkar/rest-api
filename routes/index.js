const express=require("express");
const productRoute=require("../routes/product.route")
const userRoute=require("../routes/user.route")
const authRoute=require("../routes/auth.route")
const router=express.Router()
const defaultRoutes=[
  {
    path:"/products",
    route:productRoute
  },
  {
    path:"/users",
    route:userRoute
  },
  {
    path:"/auth",
    route:authRoute
  }
]
defaultRoutes.forEach(elm=>{
  router.use(elm.path,elm.route)
})
module.exports=router