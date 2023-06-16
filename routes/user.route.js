const express=require("express");
const { createUser, getUser } = require("../controller/user.controller");


const router=express.Router()
router.route("/").post(createUser)
router.route("/").get(getUser)

module.exports=router