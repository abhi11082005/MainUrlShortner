import { Schema } from "mongoose"
import mongoose from "mongoose"

const urlSchema=new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    shortner:{
        type:String,
        require:true
    },
    count:{
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user.schema"
    }

},{timestamps:true})
const URL=mongoose.model("URL",urlSchema)
export default URL