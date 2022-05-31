const express =require("express");
const { getRoom, createRoom, deleteRoom } = require("../Controllers/Clubs");
const router = express.Router();
const authenticate =require('../Middleware/Authenticate')


router.route('/getRoom').get(getRoom);
router.route('/createRoom').post(createRoom);
router.route('/deleteRoom/:id').delete(deleteRoom);

module.exports=router;