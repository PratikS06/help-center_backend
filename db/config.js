const mongoose = require("mongoose")

exports.connectDB = async()=>{
   await mongoose.connect(process.env.MONGO_DB,{
    }).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log("Failed to connect MongoDB : ",err)
    })
}