const express = require('express')
const router = express.Router()
const { verifyToken}  = require("../utils/util")
//importing controllers

const {getUserFromJwt,signup,login,getUsers,getUser,editUser,deleteUser,addUser,recovers} = require("../controller/admin")

router.post("/auth/signup",signup)
router.post("/auth/login",login)
//log admin by force
router.get("/auth/adminbytoken",getUserFromJwt)
router.get("/auth/users",verifyToken,getUsers)
router.get("/auth/recovers",recovers)
router.get("/auth/users/:id",verifyToken,getUser)
router.post("/auth/users",verifyToken,addUser)
router.patch("/auth/users/:id",verifyToken,editUser)
router.delete("/auth/users/:id",verifyToken,deleteUser)

module.exports.router = router
