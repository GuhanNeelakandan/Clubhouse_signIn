const express=require('express')
const router =express.Router()
const AuthController=require('../Controllers/Authcontrols')

router.post("/signup",AuthController.signUp)
router.post('/login',AuthController.login)

module.exports=router