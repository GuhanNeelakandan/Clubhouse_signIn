const Room = require('../Models/Room');


const getRoom=async(req,res)=>{
    try {
        const nameList =await Room.find({});

        if(nameList){
            res.json(nameList)
        }
    } catch (error) {
        console.log(error)
    }
}
const createRoom =async(req,res)=>{
    try {
        const roomName = new Room ({
            name:req.body.name,
        })
        const createData=await roomName.save();
        if(createData){
            res.send(createData)
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteRoom=async (req,res)=>{
    try {
        const List =  await Room.findByIdAndDelete(req.params.id)
        if(List){
            res.send("deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={getRoom,createRoom,deleteRoom};