import mongoose from "mongoose"


const connectdb=async()=>{
    try{
        const connectionInstance=await mongoose.connect
        (`${process.env.MONGODB_URI}/urlShortner`);
        console.log(`MongoDB connected succesfully!! on Host:${connectionInstance.connection.host}`)
    }
    catch{
        console.log("error occur in database : ")
    }
}

export default connectdb;