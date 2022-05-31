const express =require("express");
const { getRoom, createRoom, deleteRoom } = require("../Controllers/Clubs");
const router = express.Router();
const authenticate =require('../Middleware/Authenticate')


router.route('/getRoom').get(authenticate,getRoom);
router.route('/createRoom').post(authenticate,createRoom);
router.route('/deleteRoom/:id').delete(authenticate,deleteRoom);

module.exports=router;