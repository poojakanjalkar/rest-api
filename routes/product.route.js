const express=require("express");
const { getProducts, createProduct, getById, updateById, deleteById} = require("../controller/product.controller");

const router=express.Router()
router.route("/").get(getProducts)
router.route("/").post(createProduct)
router.route("/:id").get(getById)
router.route("/").put(updateById)
router.route("/:id").delete(deleteById)


module.exports=router
