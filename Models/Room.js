const mongoose =require("mongoose")

const roomSchema =mongoose.Schema({
    name:{type:String},
})

const Room = mongoose.model('Room',roomSchema)
module.exports=Room;