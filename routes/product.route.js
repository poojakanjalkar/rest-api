const express=require("express");
const { getProducts, createProduct, getById } = require("../controller/product.controller");

const router=express.Router()
router.route("/").get(getProducts)
router.route("/").post(createProduct)
router.route("/:id").get(getById)

module.exports=router
